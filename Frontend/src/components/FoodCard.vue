<script setup>
import { RouterLink } from 'vue-router'
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import chefsApi from '../api/chefes.js'

const chefes = ref()
const router = useRouter()

onMounted(async () => {
  chefes.value = await chefsApi.buscarTodosOsChefs()
})

function selectChef(chefe) {
  router.push({ name: 'chefspage', params: { id: chefe.id } })
}

</script>

<template>
  <div class="chefes">
    <div class="card" v-for="chefe in chefes" :key="chefe.id">
      <div>
        <RouterLink @click="selectChef(chefe)" to="/chefspage">
          <img class="img" :src="chefe.pic" alt="" />
        </RouterLink>
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
  justify-content: center;
}
.card {
  height: 36.11vh;
  width: 15.1vw;
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
  transition: 0.6s;
}
.img:hover {
  cursor: pointer;
  border-radius: 30px;
}
</style>
