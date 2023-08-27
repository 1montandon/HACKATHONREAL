<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

let count = ref(1);

onMounted(() => {
  const interval = setInterval(nextImage, 10000);

  // Cleanup the interval when the component is unmounted
  onBeforeUnmount(() => {
    clearInterval(interval);
  });
});

function nextImage() {
  count.value++;
  if (count.value > 3) {
    count.value = 1;
  }

  const radioElement = document.getElementById(`radio${count.value}`);
  if (radioElement) {
    radioElement.checked = true;
  }
}
</script>
<template>
  <div class="carrosel">
    <div class="slides">
      <input type="radio" name="radio-btn" class="radio-btn" id="radio1"   />
      <input type="radio" name="radio-btn" class="radio-btn" id="radio2" />
      <input type="radio" name="radio-btn" class="radio-btn" id="radio3"/>

      <div class="slide first">
        <img src="https://i.ibb.co/SmgJS32/eduardo-montandon.png" alt="img1" />
      </div>

      <div class="slide">
        <img src="https://i.ibb.co/m8Bt04z/Fabio.png" alt="img2" />
      </div>

      <div class="slide">
        <img src="https://i.ibb.co/SmgJS32/eduardo-montandon.png" alt="img3" />
      </div>

      <div class="navigation-auto">
        <div class="auto-btn1"></div>
        <div class="auto-btn2"></div>
        <div class="auto-btn3"></div>
      </div>

      <div class="manual-navigation">
        <label for="radio1" class="manual-btn"></label>
        <label for="radio2" class="manual-btn"></label>
        <label for="radio3" class="manual-btn"></label>
      </div>
    </div>
  </div>
</template>
<style scoped>
.carrosel {
  height: 58.33vh;
  width: 28.65vw;
  border-radius: 20px;
  background: #cbc3c3;
  box-shadow: 10px 4px 4px 0px rgba(0, 0, 0, 0.15);
  overflow: hidden;
}
.slides{
    width: 400%;
    height: 400px;
    display: flex;
}
.slides input{
    display: none;
}
.slide{
    width: 25%;
    position: relative;
}
.slide img{
    height: 58.33vh;

}
.manual-navigation{
    position: absolute;
    width: 28.65vw;
    margin-top: 600px;    
    justify-content: center;
    display: flex;
    gap: 20px;
}
.manual-btn{
    border: 2px solid white;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    transition: .4s;
}
.manual-btn:hover{
    background-color: white;
}
#radio1:checked ~ .first{
    transition: .3s ease-in-out;
    margin-left: 0;
}
#radio2:checked ~ .first{
    transition: .3s ease-in-out;

    margin-left: -25%;
}#radio3:checked ~ .first{
    transition: .3s ease-in-out;

    margin-left: -50%;
}
.navigation-auto div{
    border: 2px solid rgb(255, 255, 255);
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    transition: .4s;
}
.navigation-auto{
    position: absolute;
    width: 28.65vw;
    margin-top: 600px;
    justify-content: center;
    display: flex;
    gap: 20px;
}
#radio1:checked ~ .navigation-auto .auto-btn1{
    background: linear-gradient(180deg, #ff4848 0%, #ff6e4f 100%);
}
#radio2:checked ~ .navigation-auto .auto-btn2{
    background: linear-gradient(180deg, #ff4848 0%, #ff6e4f 100%);
}
#radio3:checked ~ .navigation-auto .auto-btn3{
    background: linear-gradient(180deg, #ff4848 0%, #ff6e4f 100%);
}
</style>
