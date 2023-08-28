import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faBurger, faCake, faBowlFood } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faComment, faHeart, } from '@fortawesome/free-solid-svg-icons'

library.add(faEnvelope, faEye, faEyeSlash, faUser, faLocationDot, faAddressCard)

library.add(faEnvelope, faEye, faEyeSlash, faStar, faDollarSign, faBurger, faCake, faBowlFood, faComment, faHeart)

const app = createApp(App)

app.use(router)

app.mount('#app')
app.component("font-awesome-icon", FontAwesomeIcon)
