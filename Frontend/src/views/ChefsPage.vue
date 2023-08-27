<script setup>
import HeaderNav from '../components/HeaderNav.vue'
import ChefsCard from '../components/ChefsCard.vue'
import FoodCarrosel from '../components/FoodCarrosel.vue'
import chefsApi from '../api/chefes.js'
import { ref } from 'vue'
import { onMounted } from 'vue'

const chefes = ref()
const chefe = ref()

const props = defineProps({
  id: {
    type: Number,
    required: true
  }
})
onMounted(async () => {
  chefes.value = await chefsApi.buscarTodosOsChefs()
  chefe.value = chefes.value.find((iten) => iten.id == props.id)
})
</script>
<template>
  <HeaderNav localto="about" localto2="" localto3="" text1="oi" text2=""></HeaderNav>
  <main>
    <div class="container">
      <FoodCarrosel >      </FoodCarrosel>

      <ChefsCard :chefe="chefe"></ChefsCard>
      <div class="smallbox-container">
        <div class="small-box">
          <button>ver calendario do chefe</button>
        </div>
        <div class="small-box"><button>open chat</button></div>
      </div>
    </div>
  </main>
</template>

<style scoped>
button {
  width: 14.79vw;
  height: 5vh;
  border: none;
  outline: none;
  background-color: white;
  border-radius: 15px;
  color: #000;
  font-family: Nunito;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  transition: 0.3s;
  box-shadow: 5px 4px 4px 0px rgba(54, 53, 53, 0.25);
}
button:hover {
  cursor: pointer;
}
button:active {
  transform: scale(0.9);
}



.container {
  position: relative;
  top: 80px;
  display: flex;
  justify-content: center;
  gap: 2.86vw;
  align-items: center;
}

.small-box {
  width: 28.65vw;
  height: 37.04vh;
  border-radius: 20px;
  background: linear-gradient(180deg, #ff4848 0%, #ff6e4f 100%);
  box-shadow: 10px 4px 4px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
}

.smallbox-container {
  display: flex;
  flex-direction: column;
  gap: 3.15vh;
}
</style>
