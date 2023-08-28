<script setup>
import { ref } from 'vue'
import HeaderNav from '../components/HeaderNav.vue'
import ButtonType from '../components/login/ButtonType.vue'
import InputType from '../components/login/InputType.vue'
import usuariosApi from '../api/usuarios.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const errors = ref('')
const showError = ref(false)

const users = ref({
  name: '',
  email: '',
  cep: '',
  cpf: '',
  senha: '',
  confirmaSenha: ''
})

function confirmar() {
  if (users.value.senha != users.value.confirmaSenha) {
    errors.value = 'As senhas não coecidem!'
    showError.value = true
    console.log("3")

  } else if (users.value.senha.length > 3) {
    errors.value = 'Senha muito curta!'
    showError.value = true
    console.log("4")

  } else {
    return register()
  }
  }

  async function register() {
      await usuariosApi.adicionarUsuarios(users.value)
      console.log(users.value.name)
      router.push("/")
    
  }

const showPassword = ref(false)

function getValue(value, info) {
  if (info == 'user') users.value.name = value
  if (info == 'email') users.value.email = value
  if (info == 'cep') users.value.cep = value
  if (info == 'cpf') users.value.cpf = value
  if (info == 'senha') users.value.senha = value
}
</script>

<template>
  <header-nav text1="" text2="" localto="" localto2=""> </header-nav>

  <main>
    <div class="container">

      <div class="titles">
        <h1>REGISTER TO CONTINUE</h1>
      </div>

      <div class="error">
      <div v-if="showError">{{ errors }}</div>
    </div>
  
    <div class="inputs">
      <InputType
        type="text"
        placeholder="name"
        icon="user"
        :info="`user`"
        @get-value="getValue"
      ></InputType>
      <InputType
        type="email"
        placeholder="email"
        icon="envelope"
        :info="`email`"
        @get-value="getValue"
      >
      </InputType>
      <InputType
        type="text"
        placeholder="cep"
        icon="location-dot"
        :info="`cep`"
        @get-value="getValue"
      >
      </InputType>
      <InputType
        type="email"
        placeholder="cpf"
        icon="address-card"
        :info="`cpf`"
        @get-value="getValue"
      >
      </InputType>
      <InputType
        @buttonClicked="showPassword = !showPassword"
        :type="showPassword ? 'text' : 'password'"
        placeholder="senha"
        :icon="showPassword ? 'eye' : 'eye-slash'"
      >
      </InputType>
      <InputType
        @buttonClicked="showPassword = !showPassword"
        :type="showPassword ? 'text' : 'password'"
        placeholder="senha"
        :icon="showPassword ? 'eye' : 'eye-slash'"
      >
      </InputType>
      <div class="buttons">
        <button-type class="button" buttontext="Register" @click="confirmar()">
        </button-type>
      </div>
      
    </div>
  </div>
</main>

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
</template>

<style scoped>
.error {
  top: 25px;
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
  position: relative;
  align-items: center
}
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
  margin-top: 40px;
}
.inputs {
  display: grid;
  grid-template-rows: 1fr 1fr;
  row-gap: 22px;
  margin-bottom: 12px;
  justify-content: center;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
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
.forgotPass {
  width: 29vw;
  margin-bottom: 52px;
  color: rgba(28, 119, 225, 0.6);
  font-family: Nunito;
  font-size: 13px;
  font-style: normal;
  font-weight: 800;
}
</style>
