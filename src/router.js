import Home from './pages/Home'
import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [{ path: '/', component: Home }],
})
export default router
