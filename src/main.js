// import {create} from 'core-js/core/object'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import '@/assets/styles/common.less'

// createApp(App).use(store).use(router).mount('#app')
createApp(App).use(store).mount('#app')
