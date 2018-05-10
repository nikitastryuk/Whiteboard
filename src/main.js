import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import fontawesome from '@fortawesome/fontawesome'
import pencil from '@fortawesome/fontawesome-free-solid/faPencilAlt'
import undo from '@fortawesome/fontawesome-free-solid/faUndo'
import redo from '@fortawesome/fontawesome-free-solid/faRedo'
import eraser from '@fortawesome/fontawesome-free-solid/faEraser'
import circle from '@fortawesome/fontawesome-free-solid/faCircle'
import font from '@fortawesome/fontawesome-free-solid/faFont'
import upload from '@fortawesome/fontawesome-free-solid/faUpload'

fontawesome.library.add(pencil, undo, redo, eraser,circle, font, upload);

Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  render: h => h(App)
})
