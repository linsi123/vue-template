import '@/common/class-component-hooks'
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/store'
import { FETCH_USER_STATUS } from '@/store/actions'

import MyComp from '@/components/MyComp'

Vue.config.productionTip = false
;(async () => {
  await store.dispatch(FETCH_USER_STATUS)
  new Vue({
    router,
    store,
    components: {
      MyComp
    },
    render: h => h(App)
  }).$mount('#app')
})()
