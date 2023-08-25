<script setup>
const chefes = [
  { id: 1, name: 'Eduardo', stars: 5, dollars: 5, pic:'https://avatars.githubusercontent.com/u/48130339?v=4' },

]
</script>

<template>
    <div class="card" v-for="chefe in chefes" :key="chefe.id">
        <div class="pfp"></div>
        <h1>Name</h1>
        <div  class="stars" >
            <font-awesome-icon v-for="i in chefe.stars" :key="i" class="iconStar" icon="star" />
        </div>
    </div>
</template>

<style scoped>
.card {
    height: 77.78vh;
    width: 28.64vw;
    border-radius: 20px;
    background: linear-gradient(180deg, #ff4848 0%, #ff6e4f 100%);
    box-shadow: 10px 4px 4px 0px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.pfp {
    position: relative;
    bottom: 60px;
    width: 18.23vw;
    height: 18.23vw;
    border-radius: 374px;
    background: linear-gradient(0deg, #efeded 0%, rgba(250, 249, 249, 0.84) 100%);
    box-shadow: 10px 4px 4px 0px rgba(0, 0, 0, 0.15);

}
h1{
    color: #FFF;
font-family: Nunito;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.stars {
  display: flex;
  gap: 15px;
  flex-direction: row;
}
.iconStar {
  width: 2vw;
  height: 2vw;
  color: rgb(255, 208, 0);
}
</style>
