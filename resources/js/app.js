require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import router from './Router/index'
import App from './Components/App.vue'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(Vuelidate)

const app = new Vue({
    el: '#app',
    router,
    components: { App }
});
