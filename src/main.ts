import '@/common/scripts/class-component-hooks'
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/store'

import MyComp from '@/components/MyComp'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  components: {
    MyComp
  },
  render: h => h(App)
}).$mount('#app')
