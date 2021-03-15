import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import "@/assets/css/bootstrap.min.css";
import "@/assets/css/font-awesome/css/font-awesome.min.css";
import "@/assets/css/ionicons/css/ionicons.min.css";
import "@/assets/css/venobox.min.css";
import "@/assets/css/owl.carousel/assets/owl.carousel.min.css";
import "@/assets/css/aos/aos.css";
import "@/assets/css/style.css";


import "@/assets/js/owl.carousel/owl.carousel.min.js";
import "@/assets/js/main.js";

createApp(App).use(router).mount('#app')
