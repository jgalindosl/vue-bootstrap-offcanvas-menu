import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

require('bootstrap');

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
