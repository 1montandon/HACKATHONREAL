<script setup></script>
<template>
  <div class="form">
    <form @submit.prevent="">
      <textarea placeholder="event descripton" id=""></textarea>
      <input placeholder="add location" class="local" type="text" />
      <div class="small-container">
        <div class="checkbox-container">
          <label for=""> dia inteiro</label>
          <input class="checkbox" type="checkbox" id="" name="" value="" />
        </div>
        <div class="checkbox-container">
          <label for=""> qual dia</label>
          <input class="date" type="date" />
        </div>
        <div class="checkbox-container">
          <label for=""> comeca - termina</label>
          <input class="time" type="time" /> <input class="time" type="time" />
        </div>
        <div class="checkbox-container">
          <label for=""> n de convidados</label>
          <input class="numberguest" type="number" id="" name="" value="" />
        </div>
      </div>
      <div class="button-div"><button >concluir contrato</button> </div>
      
    </form>
  </div>
</template>
<style scoped>
button{
    position: relative;
    top: 30px;
    outline: none;
    border: none;
    width: 15.10vw;
    height: 6.02vh;
    background-color: #FFF;
filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.25));
color: #000;
font-family: Nunito;
font-size: 25px;
font-style: normal;
font-weight: 700;
line-height: normal;
border-radius: 40px;
transition: .3s ease-in-out;
}
button:hover{
    cursor: pointer;
}
button:active{
    transform: scale(0.9);
}
.button-div{
    display: flex;
    justify-content: center}
.date{
    outline: none;
    border: none;
    width: 6.8vw;
    height: 2vh;
    -webkit-appearance: none;
    background-color: #D9D9D9;
    border-radius: 5px;
    color: #8F8E8E;
font-family: Nunito;
font-size: 15px;
font-style: normal;
font-weight: 700;
line-height: normal;
padding-left: 0.572917vw;
padding-right: 0.572917vw;
}
.time {
    -webkit-appearance: none;
    outline: none;
    border: none;
    width: 2.60vw;
    height: 2.59vh;
    background-color: #D9D9D9;
    border-radius: 5px;
    color: #8F8E8E;
font-family: Nunito;
font-size: 15px;
font-style: normal;
font-weight: 700;
line-height: normal;
padding-left: 0.572917vw;
padding-right: 0.572917vw;
}
.numberguest{
    -webkit-appearance: none;
    outline: none;
    border: none;
    width: 2.60vw;
    height: 2.59vh;
    background-color: #D9D9D9;
    border-radius: 5px;
    color: #8F8E8E;
font-family: Nunito;
font-size: 15px;
font-style: normal;
font-weight: 700;
line-height: normal;
padding-left: 0.572917vw;
padding-right: 0.572917vw;
}
::-webkit-calendar-picker-indicator {
    color: #8F8E8E;


}
.checkbox {
  width: 1.2vw;
  height: 1.2vw;
  -webkit-appearance: none;
    outline: none;
    border: none;
    background-color: #D9D9D9;
    border-radius: 5px;
    transition: .3s ease-in-out;


}
.checkbox:checked {
  width: 1.2vw;
  height: 1.2vw;

    outline: none;
    border: none;
    background-color: #4882ff;

}
.checkbox-container {
  padding-left: 1.15vw;
  padding-right: 1.15vw;
  color: #8f8e8e;
  font-family: Nunito;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.small-container {
  flex-direction: column;
  justify-content: center;
  display: flex;
  width: 19.79vw;
  height: 20.83vh;
  background-color: white;
  border-radius: 10px;
  background: #f1f1f1;
  box-shadow: 5px 5px 5px 3px rgba(54, 53, 53, 0.25);
  gap: 2.59vh;
}
form {
  display: flex;
  gap: 3.33vh;
  flex-direction: column;
}
.local {
  position: relative;
  border: none;
  outline: none;
  width: 48.44vw;
  height: 6.48vh;
  border-radius: 10px;
  background: #f1f1f1;
  box-shadow: 5px 5px 5px 3px rgba(54, 53, 53, 0.25);
  color: #000000;
  font-family: Nunito;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-left: 0.572917vw;
}
form {
  margin-top: 6.02vh;
  margin-left: 1.93vw;
}
.form {
  width: 52.6vw;
  height: 70.37vh;
  border-radius: 20px;
  background: linear-gradient(180deg, #ff4848 0%, #ff6e4f 100%);
  box-shadow: 10px 4px 4px 0px rgba(0, 0, 0, 0.15);
}
textarea {
  border: none;
  resize: none;
  outline: none;
  width: 48.44vw;
  height: 11.11vh;
  border-radius: 10px;
  background: #f1f1f1;
  box-shadow: 5px 5px 5px 3px rgba(54, 53, 53, 0.25);
  color: #000000;
  font-family: Nunito;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-top: 1.85vh;
  padding-left: 0.572917vw;
}
::placeholder {
  position: relative;
  color: #8f8e8e;
  font-family: Nunito;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
