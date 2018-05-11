import Vue from 'vue';
import App from './App.vue';

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import store from './store/store';

import fontawesome from '@fortawesome/fontawesome';
import icons from './assets/fontawesomeIcons';
fontawesome.library.add(icons);

Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});