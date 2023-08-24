<script setup>
const chefes = [
  { id: 1, name: 'Eduardo', stars: 5, dollars: 5, pic:'https://avatars.githubusercontent.com/u/48130339?v=4' },
  { id: 2, name: 'Monta', stars: 5, dollars: 3, pic:'https://avatars.githubusercontent.com/u/849206?v=4'},
  { id: 1, name: 'BLABLA', stars: 5, dollars: 1, pic:'https://avatars.githubusercontent.com/u/165224?v=4'},
  { id: 1, name: 'Eduardo FOrget', stars: 2, dollars: 4, pic:'https://zonamista.com.br/wp-content/uploads/2023/07/sashaa.jpg'},
  { id: 1, name: 'Eduardo', stars: 5, dollars: 5, pic:'https://avatars.githubusercontent.com/u/48130339?v=4' },
  { id: 2, name: 'Monta', stars: 5, dollars: 3, pic:'https://avatars.githubusercontent.com/u/849206?v=4'},
  { id: 1, name: 'BLABLA', stars: 5, dollars: 1, pic:'https://avatars.githubusercontent.com/u/165224?v=4'},
  { id: 1, name: 'Eduardo FOrget', stars: 2, dollars: 4, pic:'https://zonamista.com.br/wp-content/uploads/2023/07/sashaa.jpg'},
  { id: 1, name: 'Eduardo', stars: 5, dollars: 5, pic:'https://avatars.githubusercontent.com/u/48130339?v=4' },
  { id: 2, name: 'Monta', stars: 5, dollars: 3, pic:'https://avatars.githubusercontent.com/u/849206?v=4'},
  { id: 2, name: 'Monta', stars: 5, dollars: 3, pic:'https://avatars.githubusercontent.com/u/849206?v=4'},
  { id: 1, name: 'BLABLA', stars: 5, dollars: 1, pic:'https://avatars.githubusercontent.com/u/165224?v=4'},
  { id: 1, name: 'Eduardo FOrget', stars: 2, dollars: 4, pic:'https://zonamista.com.br/wp-content/uploads/2023/07/sashaa.jpg'},
  { id: 1, name: 'Eduardo', stars: 5, dollars: 5, pic:'https://avatars.githubusercontent.com/u/48130339?v=4' },
  { id: 2, name: 'Monta', stars: 5, dollars: 3, pic:'https://avatars.githubusercontent.com/u/849206?v=4'}



]
</script>

<template>
  <div class="chefes">
    <div class="card" v-for="chefe in chefes" :key="chefe.id">
      <div>
        <img class="img" :src="chefe.pic" alt="">
      </div>
      <div class="infos">
        <div class="stars">
          <span v-for="i in chefe.stars" :key="i">
            <font-awesome-icon class="iconStar" icon="star" />
          </span>
        </div>

        <div class="dollars">
          <span v-for="i in chefe.dollars" :key="i">
            <font-awesome-icon class="iconMoney" icon="dollar" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.chefes {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 3.91vw;
  row-gap: 2vw;
  justify-content: center

}
.card{
    height: 36.11vh;
    width: 15.10vw;
}
.infos {
  top: 2.1vh;
  position: relative;
}
.stars {
  display: flex;
  gap: 15px;
}
.dollars {
  display: flex;
}
.iconMoney {
  width: 1vw;
  height: 1vw;
  color: black;
}
.iconStar {
  width: 2vw;
  height: 2vw;
  color: rgb(255, 208, 0);
}
.img {
  width: 15.1vw;
  height: 15.1vw;
  border-radius: 10px;
  box-shadow: 4px 4px 0px 0px rgba(190, 186, 186, 0.25);
  transition: .4s;
}
.img:hover{
cursor: pointer;
border-radius: 15px;
}
</style>
