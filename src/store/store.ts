import Vue from 'vue'
import Vuex from 'vuex'
import { camelCase } from 'lodash'
import { RootState } from './types'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import todoData from './modules/todo.data'

Vue.use(Vuex)

const store = new Vuex.Store<RootState>({
  state: {
    uid: ''
  },
  mutations,
  actions,
  getters,
  modules: {
    todoData
  }
})

function register(r) {
  r.keys().forEach(key => {
    const moduleName = camelCase(key.replace('./', '').replace(/\.js$/, ''))
    store.registerModule(moduleName, r(key).default)
  })
}

// register(require.context('./modules', false, /\.js$/))

export default store
