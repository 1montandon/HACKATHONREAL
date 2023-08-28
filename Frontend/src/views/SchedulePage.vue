<script setup>
import HeaderNav from '../components/HeaderNav.vue';
import ScheduleContract from '../components/ScheduleContract.vue';
import ChefsCard from '../components/ChefsCard.vue';
import { onMounted } from 'vue';
import { ref } from 'vue';
import chefsApi from '../api/chefes.js'

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
  chefe.value = chefes.value.find((item) => item.id == props.id)
})

</script>
<template>
        <HeaderNav localto="ds" localto2="" text1="" text2=""></HeaderNav>

    <main><div class="wholecontainer"><ScheduleContract></ScheduleContract>
    <ChefsCard class="ChefsCard" :chefe="chefe"></ChefsCard>
</div>
</main>
    


</template>
<style scoped>
.wholecontainer{
    gap: 40px;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    height: 90vh;
}
.ChefsCard{
    height: 70.37vh;
}
</style>