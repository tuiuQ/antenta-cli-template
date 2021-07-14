import { createState } from './store'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = createState()

export default {
  namespace: true,
  state,
  actions,
  getters,
  mutations
}