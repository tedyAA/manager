import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from "@/store/tasks";
import moduleB from "@/store/tasksDone";
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        a: moduleA,
        b: moduleB
    }
})

export default store