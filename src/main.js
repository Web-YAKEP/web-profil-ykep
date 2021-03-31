import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "@/assets/css/bootstrap.min.css";
import "@/assets/css/font-awesome/css/font-awesome.min.css";

import "@/assets/css/style.css";
import "@/assets/js/bootstrap.min.js";

import "@/assets/js/main.js";

createApp(App).use(router).mount('#app')
