<script setup>
import HeaderNav from '../components/HeaderNav.vue'
import ChefsCard from '../components/ChefsCard.vue'
import ButtonType from '../components/login/ButtonType.vue'
</script>

<template>
  <HeaderNav localto="ds" localto2="" localto3="" text1="" text2=""></HeaderNav>

  <main>
    <div class="container">
      <ChefsCard></ChefsCard>
      <div class="smallbox-container">
        <div class="small-box">
          <div class="inputs">
            <input type="text" class="inputsmall" />
            <input type="text" class="inputsmall" />
            <input type="text" class="inputsmall" />
          </div>

          <input type="email" />
          <input type="text" />
          <input type="text" />

          <button>edit</button>
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

.carroselPhotos {
  height: 58.33vh;
  width: 28.65vw;
  border-radius: 20px;
  background: #cbc3c3;
  box-shadow: 10px 4px 4px 0px rgba(0, 0, 0, 0.15);
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

  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;
}

.smallbox-container {
  display: flex;
  flex-direction: column;
  gap: 3.15vh;
}

.inputs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.inputsmall {
  margin: 6%;
}
</style>
