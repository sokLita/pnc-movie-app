import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import BaseButton from './components/base/BaseButton.vue'
// import BaseInput from './components/base/BaseInput.vue'

const app = createApp(App)

app.use(router)

app.component('BaseButton', BaseButton)
// app.component('BaseInput', BaseInput)

app.mount('#app')