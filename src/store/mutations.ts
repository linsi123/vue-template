import { MutationTree } from 'vuex'
import { ADD_USER } from './mutationsType'
import { RootState } from './types'

const mutations: MutationTree<RootState> = {
  [ADD_USER](state, payload) {
    state.uid = payload.uid
  }
}

export default mutations
