<script setup>
import HeaderNav from '../components/HeaderNav.vue'
import FoodCard from '../components/FoodCard.vue'
import FoodCategories from '../components/FoodCategories.vue'
</script>
<template>
  <HeaderNav localto="ds" localto2="" localto3="" text1="" text2=""></HeaderNav>
  <main>
    <div class="container"> 
    <FoodCategories class="foodCategories"></FoodCategories>

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
  top: 4.17vh;
  position: relative;
}
</style>
