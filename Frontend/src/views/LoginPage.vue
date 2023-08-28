<script setup>
import { ref, onMounted } from 'vue'
import HeaderNav from '../components/HeaderNav.vue'
import ButtonType from '../components/login/ButtonType.vue'
import InputType from '../components/login/InputType.vue'
import usuariosApi from '../api/usuarios.js'
import { isLogged } from '../api/IsLoggedModule'
import { useRouter } from 'vue-router';
const router = useRouter()


const errors = ref('')
const showError = ref(false)


const allUsers = ref({
  
})

const users = ref({
  email: '',
  senha: ''
})

async function login() {
  if (users.value.email == '' || users.value.senha == '') {
    errors.value = 'campos vazios'
    showError.value = true
  } else if (!/^[^@]+@\w+(\.\w+)+\w$/.test(users.value.email)) {
    errors.value = 'Email invalido!'
    showError.value = true
  } else if (users.value.senha.length < 3) {
    errors.value = 'Senha muito curta!'
    showError.value = true
  } else if(validaUser(users.value.email,users.value.senha ) === false){
    errors.value = 'Email ou Senha invalidos!'
    showError.value = true
  }
  else {
    isLogged.value = true;
    errors.value = '';
    showError.value = false;
    router.push('/')
    
  }
}

function validaUser(email, senha) {
  const user = allUsers.value.find((user) => user.email === email && user.senha === senha)
  return user === undefined ? false : true
}

function getValue(value, info) {
  if (info == 'email') users.value.email = value
  if (info == 'senha') users.value.senha = value
}

onMounted(async () => {
  allUsers.value = await usuariosApi.buscarTodosUsuarios()
})

const showPassword = ref(false)
</script>
<template>
  <header-nav text1="" text2="" localto="" localto2=""> </header-nav>

  <main>
    <div class="container">
      <div class="titles">
        <h1>welcome to jame’s</h1>
        <h2>login to continue</h2>
      </div>

      <div class="inputs">
        <InputType
          type="email"
          placeholder="email"
          icon="envelope"
          :info="'email'"
          @get-value="getValue"
        >
        </InputType>
        <InputType
          @buttonClicked="showPassword = !showPassword"
          :type="showPassword ? 'text' : 'password'"
          placeholder="senha"
          :icon="showPassword ? 'eye' : 'eye-slash'"
          :info="'senha'"
          @get-value="getValue"
        >
        </InputType>
      </div>

      <div class="error">
        <div v-if="showError">{{ errors }}</div>
      </div>
      <div class="buttons">
        <RouterLink to="/loginpage"
          ><button-type class="button" buttontext="login" @click="login()"> </button-type
        ></RouterLink>

        <RouterLink to="/registerpage"
          ><button-type class="button" buttontext="register"> </button-type
        ></RouterLink>
      </div>
    </div>
    <div class="footer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1855"
        height="561"
        viewBox="0 0 1855 561"
        fill="none"
      >
        <g filter="url(#filter0_d_110_64)">
          <path
            d="M630 323C258 241 466 74 8 0H-6.5L-19 589.5L167 632L1830.5 772C1823.67 771 1757.7 713.5 1548.5 491.5C1287 214 1002 405 630 323Z"
            fill="url(#paint0_linear_110_64)"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_110_64"
            x="-19"
            y="0"
            width="1873.5"
            height="786"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="20" dy="10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.2125 0 0 0 0 0.207188 0 0 0 0 0.207188 0 0 0 0.25 0"
            />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_110_64" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_110_64"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_110_64"
            x1="1572"
            y1="334"
            x2="20"
            y2="30"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0410207" stop-color="#F75531" />
            <stop offset="1" stop-color="#DC1B1B" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </main>
</template>

<style scoped>
main {
  max-height: calc(100%-100px);
  overflow-y: hidden;
}
.footer {
  position: fixed;
  bottom: -10px;
  z-index: -1;
}
svg {
  overflow: hidden;
}
.buttons {
  display: grid;
  grid-template-rows: 1fr 1fr;
  row-gap: 22px;
  justify-items: center;
}
.button:active {
  transform: scale(0.9);
}
.titles {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 12.22vh;
  margin-top: 40px;
}
.inputs {
  display: grid;
  grid-template-rows: 1fr 1fr;
  row-gap: 38px;
  margin-bottom: 12px;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
a {
  color: rgba(28, 119, 225, 0.6);
}
.error {
  top: 2vh;
  position: relative;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  width: 29vw;
  height: 2vh;
  margin-bottom: 52px;
  color: rgb(225, 28, 28);
  font-family: Nunito;
  font-size: 13px;
  font-style: normal;
  font-weight: 800;
}

h1 {
  color: #000;
  font-family: Nunito;
  font-size: 40px;
  font-style: normal;
  font-weight: 850;
  line-height: normal;
  text-transform: uppercase;
}
h2 {
  color: #797373;
  font-family: Nunito;
  font-size: 15px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
}
</style>
