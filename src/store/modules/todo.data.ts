import { Module, ActionTree } from 'vuex'
import { getTodo } from '@/services/todo'
import { RootState } from '../types'
import { TodoState } from './todo.types'

const MODULE_NAME = 'todoData'

export const FETCH_DATA = 'fetchData/action'
const SET_DATA = 'setData/mutation'

const state = {
  todo: {
    number: 0
  }
}

const getters = {}

const actions: ActionTree<TodoState, RootState> = {
  async [FETCH_DATA]({ commit }, payload) {
    const params = {}
    const res = await getTodo(params)
    commit(SET_DATA, res)
  }
}

const mutations = {
  [SET_DATA](state, payload) {
    state.user = payload
  }
}

const namespaced: boolean = true

export const todo: Module<TodoState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
}

export const P_TODO_FETCH_DATA = `${MODULE_NAME}/${FETCH_DATA}`

export default todo
