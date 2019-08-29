import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { Carousel,CarouselItem } from 'element-ui'
Vue.use(Carousel).use(CarouselItem)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
