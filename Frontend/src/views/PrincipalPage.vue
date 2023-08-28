<script setup>
import HeaderNav from '../components/HeaderNav.vue'
import FoodCard from '../components/FoodCard.vue'
 </script>
<template>
  <HeaderNav localto="ds" localto2="" text1="" text2=""></HeaderNav>
  <main>
    <div class="container"> 

    <FoodCard class="foodCard"></FoodCard>
</div>
  </main>
</template>
<style scoped>
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
}

.foodCard {
  top: 7.17vh;
  position: relative;
}
</style>
