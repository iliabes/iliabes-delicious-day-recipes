import {createStore} from 'vuex'
import state from './state'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'


const store = createStore({
    actions,
    getters,
    mutations,
    state
})


export default store