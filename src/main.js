import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import Axios from 'axios'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
Vue.use(VueRouter)

const router = new VueRouter({ routes, mode: 'history' })
const axios = Axios.create({
  baseURL: "http://gateway.marvel.com/v1/public",
  params: {
    "ts": "1",
    "apikey": "6dde85c58427c9201d9da58ddc388843",
    "hash": "2477a3f1a16ab8205b809ece1a77d8c0"
  },
  Headers: {
    'Accept-Encoding':'gzip'
  }
})

const queryParams = {
  "ts": "1",
  "apikey": "6dde85c58427c9201d9da58ddc388843",
  "hash": "2477a3f1a16ab8205b809ece1a77d8c0"
}


Vue.prototype.$axios = axios
Vue.prototype.$queryParams = queryParams


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
