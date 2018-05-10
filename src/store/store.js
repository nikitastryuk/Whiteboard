import Vue from 'vue';
import Vuex from 'vuex';
import dashboardModule from './modules/dashboard';
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        dashboardModule
    }
});