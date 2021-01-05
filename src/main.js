import Vue from 'vue'
import App from './App.vue'
import VueRx from 'vue-rx'
import 'normalize.css'

Vue.use(VueRx)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
