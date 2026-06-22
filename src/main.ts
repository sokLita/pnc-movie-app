import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import BaseButton from './components/base/BaseButton.vue'
import BaseInput from './components/base/BaseInput.vue'
import BaseRadio from './components/base/BaseRadio.vue'
import BaseCheckbox from './components/base/BaseCheckbox.vue'

const app = createApp(App)

app.use(router)

app.component('base-button', BaseButton)
app.component('base-input', BaseInput)
app.component('base-radio', BaseRadio)
app.component('base-checkbox',BaseCheckbox)

app.mount('#app')