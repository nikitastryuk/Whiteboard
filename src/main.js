import Vue from 'vue';
import App from './App.vue';

import store from './store/store';

import './config/fontawesome';
import "vue-slider-component/theme/default.css";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
}).$mount('#app');
