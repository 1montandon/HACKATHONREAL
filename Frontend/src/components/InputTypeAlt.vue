<script setup>

const props = defineProps({
  placeholder: String,
  type: String,
  icon: String,
  info: String,
})



</script>

<template>
  <div class="inputTotal" >
    
  <font-awesome-icon class="icon"  :icon="props.icon" style="color: #ffffff;" />
    <input  disabled class="input"  :placeholder="props.placeholder">

  </div>
</template>

<style scoped>
.icon{
  position: relative;
  left:40px;
}
.input{
  position: relative;
  right: 20px;
  border: none;
  outline: none;
  width: 20.52vw;
  height: 6.02vh;
  border-radius: 30px;
  background: rgba(217, 217, 217, 0.07);
  box-shadow: 5px 5px 2px 2px rgba(0, 0, 0, 0.25);
  color: #FFF;
font-family: Nunito;
font-size: 25px;
font-style: normal;
font-weight: 700;
line-height: normal;
padding-left: 80px;


}

.inputTotal{
  display: flex;
  align-items: center;
}
.icon{
  width: 40px;
height: 40px;
color: white;
}
.input::placeholder{
  color: #FFF;
font-family: Nunito;
font-size: 25px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
</style>