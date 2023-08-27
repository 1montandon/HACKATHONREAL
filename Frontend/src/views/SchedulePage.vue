<script setup>
import HeaderNav from '../components/HeaderNav.vue';
import ScheduleContract from '../components/ScheduleContract.vue';
import ChefsCard from '../components/ChefsCard.vue';
</script>
<template>
        <HeaderNav localto="ds" localto2="" localto3="" text1="" text2=""></HeaderNav>

    <main><div class="wholecontainer"><ScheduleContract></ScheduleContract>
    <ChefsCard class="ChefsCard"></ChefsCard>
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
    height: 760px;
}
</style>