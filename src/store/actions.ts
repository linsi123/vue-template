import { ActionTree } from 'vuex'
import { RootState } from './types'
import { ADD_USER } from './mutationsType'
import { fetchUser } from '@/services/user'

export const FETCH_USER_STATUS = 'fetchUserStatus'

type actions = ActionTree<RootState, RootState>

const actions: actions = {
  async [FETCH_USER_STATUS]({ commit }) {
    const params = {}
    const res = await fetchUser(params)
    commit(ADD_USER, { uid: res.result })
  }
}

export default actions
