import axios from "axios";
<<<<<<< HEAD
export default class CategoriasApi {
  async buscarTodasAsCategorias() {
    const response = await axios.get("http://localhost:3000/categorias/");
    return response.data;
  }

  async buscarCategoria(id) {
    const response = await axios.get(`http://localhost:3000/categorias/${id}`);
    return response.data;
  }

  async adicionarCategoria(categoria) {
    const response = await axios.post("http://localhost:3000/categorias/",categoria);
    return response.data;
  }

  async excluirCategoria(id) {
    const response = await axios.delete(`http://localhost:3000/categorias/${id}`);
    return response.data;
  }

  async atualizarCategoria(categoria) {
    const response = await axios.put(`http://localhost:3000/categorias/${categoria.id}`,categoria);
    return response.data;
  }
}
=======
export default class UsuariosApi{
    async buscarTodasAsCategorias() {
        const response = await axios.get("http://localhost:3000/categorias/");
        return response.data;
      }
    
      async buscarCategoria(id) {
        const response = await axios.get(`http://localhost:3000/categorias/${id}`);
        return response.data;
      }
    
      async adicionarCategoria(categoria) {
        const response = await axios.post("http://localhost:3000/categorias/", categoria);
        return response.data;
      }
    
      async excluirCategoria(id) {
        const response = await axios.delete(`http://localhost:3000/categorias/${id}`);
        return response.data;
      }
    
      async atualizarCategoria(categoria) {
        const response = await axios.put(`http://localhost:3000/categorias/${categoria.id}`,categoria);
        return response.data;
      }
    
}
>>>>>>> 9375c1a86214c9c22e464a8ec3ea24626f578dcd
