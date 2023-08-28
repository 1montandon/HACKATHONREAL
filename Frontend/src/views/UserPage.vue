<script setup>
import HeaderNav from '../components/HeaderNav.vue'
import UsersCard from '../components/UsersCard.vue'

</script>

<template>
  <HeaderNav localto="ds" localto2="" text1="" text2=""></HeaderNav>

  <main>
    <div  class="container">
      <UsersCard></UsersCard>

    </div>
  </main>
</template>

<style scoped>
.container {
  position: relative;
  top: 80px;
  display: flex;
  justify-content: center;
  gap: 2.86vw;
  align-items: center;
  flex-direction: column;
}
.button{
  position: relative;
  bottom: 110px;
}
</style>
