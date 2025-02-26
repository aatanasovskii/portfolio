import {createStore} from 'vuex'
import createPersistedState from "vuex-plugin-persistedstate";

const Store = createStore({
    modules: {},
    plugins: [createPersistedState()],
})

export default Store
