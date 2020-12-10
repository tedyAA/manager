import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from "@/store/tasks";
Vue.use(Vuex)

const store = new Vuex.Store({

    modules: {
        t: moduleA
    }
})

export default store