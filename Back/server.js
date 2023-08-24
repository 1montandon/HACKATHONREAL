const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db/db.json')
const middlewares = jsonServer.defaults()


server.use(middlewares)


server.get('/chefs-com-avaliacao', (req, res) => {
  const db = require('./db/db.json')
  const chefes = db.chefs
  const avaliacoes = db.avaliacoes
  chefes.forEach(c => {
    let sumStars = 0  
    let qtdAvaliacoes = 0
    avaliacoes.forEach(a => {
      if (a.chefId === c.id) {
        sumStars+=a.stars
        qtdAvaliacoes++
      }
    })
    c.stars = Math.ceil(sumStars/qtdAvaliacoes)
    
  })
  console.log(chefes)
  res.jsonp(chefes)
})

server.use(jsonServer.bodyParser)


server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})