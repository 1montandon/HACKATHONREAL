<script setup>
import InputTypeAlt from '../components/InputTypeAlt.vue'
import { isLogged, updateIsLogged } from '../api/IsLoggedModule';
import { useRouter } from 'vue-router';
const router = useRouter()

function deslogar(){
  console.log("entrou")
  if(isLogged.value === true){
    updateIsLogged(false);
    console.log("entrou2")
    router.push("/")
  }

}
</script>

<template>
  <div class="card">
    <div class="pfp-circle"><img src="https://i.ibb.co/V3FC2xk/f90ba86f-6ef5-4420-a965-9b0a891c536f.jpg" alt="" class="pfp" /></div>
    <h1>Eduardo</h1>
        <div class="small-box">
          <div class="inputs">
            <InputTypeAlt placeholder="eduardo" icon="user"> </InputTypeAlt>
            <InputTypeAlt placeholder="emontandon@gmail.com" icon="envelope">> </InputTypeAlt>
            <InputTypeAlt placeholder="***********" icon="eye"> </InputTypeAlt>
          </div>
          <div class="buttons"> <button class="button">edit</button>
          <button class="button" @click="deslogar()">deslogar</button> </div>
          
      </div>

  </div>
</template>

<style scoped>  
.buttons{
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.button {
  position: relative;
  width: 7.4vw;
  height: 3.52vh;
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

.small-box {
    position: relative;
  bottom: 25px;  
  width: 28.65vw;
  height: 37.04vh;
  border-radius: 20px;
  display: flex;

  flex-direction: column;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;
  gap: 3vh;
}


.inputs {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 3.52vh;
}



.card {
  height: 77.78vh;
  width: 28.64vw;
  border-radius: 20px;
  background: linear-gradient(180deg, #ff4848 0%, #ff6e4f 100%);
  box-shadow: 10px 4px 4px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pfp {
  width: 18.23vw;
  height: 18.23vw;
  border-radius: 374px;
}
.pfp-circle {
  position: relative;
  bottom: 60px;
  width: 18.23vw;
  height: 18.23vw;
  border-radius: 374px;
  box-shadow: 10px 4px 4px 0px rgba(0, 0, 0, 0.15);
}
h1 {
    position: relative;
  bottom: 25px;
  color: #fff;
  font-family: Nunito;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
