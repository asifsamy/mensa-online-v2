import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import VueHead from 'vue-head'
import VueRouter from 'vue-router'
import routes from './routes'
import { store } from './store/store'
import VueStripeCheckout from 'vue-stripe-checkout'

// base/global options
// these options can be overridden 
// by the options in the .open(options) 
// function.

const options = {
  key: 'pk_test_oVLvWYLDE6HDjwttjzr52iw100K3fX1zib',
  image: 'https://cdn.meme.am/images/100x100/15882140.jpg',
  locale: 'auto',
  currency: 'PHP',
  billingAddress: true,
  panelLabel: 'Subscribe {{amount}}'
}

Vue.use(VueStripeCheckout, options)
Vue.use(VueHead)
Vue.use(VueRouter)

const router = new VueRouter({mode:'history',routes});

new Vue({
  store :store,
  el: '#app',
  beforeCreate(){
    Vue.prototype.$http = axios
    axios.defaults.xsrfHeaderName = 'X-CSRFToken'
    axios.defaults.xsrfCookieName = 'csrftoken'
  },
  render: h => h(App),
  router
}).$mount('#app');
