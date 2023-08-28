<script setup>
const props = defineProps({
  chefe: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="card">
    <div class="pfp-circle"><img :src="chefe?.pic" alt="" class="pfp" /></div>
    <h1>{{ chefe?.name }}</h1>
    <div class="iconsreal">
      <div class="stars">
        <font-awesome-icon v-for="i in chefe?.stars" :key="i" class="iconStar" icon="star" />
      </div>
      <div class="dollars">
        <font-awesome-icon v-for="i in chefe?.dollars" :key="i" class="iconMoney" icon="dollar" />
      </div>
    </div>

    <div class="iconsgroup">
      <div class="iconssquare">
        <font-awesome-icon class="icons" icon="comment" />
      </div>
      <div class="iconssquare">
        <font-awesome-icon class="icons" icon="eye" />
      </div>
      <div class="iconssquare">
        <font-awesome-icon class="icons" icon="heart" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.iconsreal{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  
}
.icons {
  width: 2.6vw;
  height: 2.6vw;
  color: white;
}
.iconsgroup {
  display: flex;
  width: 19.43vw;
  gap: 60px;
  justify-content: center;
  top: 160px;
  position: relative;
}
.iconssquare {
  display: flex;
  width: 7.01vh;
  height: 7.01vh;
  border-radius: 15px;
  background: rgba(217, 217, 217, 0.07);
  box-shadow: 5px 4px 4px 2px rgba(0, 0, 0, 0.25);
  align-items: center;
  justify-content: center;
}

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
  width: 18.23vw;
  height: 18.23vw;
  border-radius: 374px;
}
.pfp-circle {
  position: relative;
  bottom: 60px;
  width: 18.23vw;
  height: 18.23vw;
  border-radius: 374px;
  background: linear-gradient(0deg, #efeded 0%, rgba(250, 249, 249, 0.84) 100%);
  box-shadow: 10px 4px 4px 0px rgba(0, 0, 0, 0.15);
}
h1 {
  color: #fff;
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
.iconMoney {
  width: 2vw;
  height: 1.8vw;
  color: rgb(255, 255, 255);
}
</style>
