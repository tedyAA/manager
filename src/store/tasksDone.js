import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleB = {
    state: () => ({
        done:[]
    }),
    mutations: {
        // doneTask (state, task) {
        //     state.done.push(task.name)
        //     state.done.push(task.content)
        //     // console.log(state.done)
        //
        // }
    },
    actions:{
        doneTasks({commit},task){
            commit('doneTask',task)
        }
    }
}

export default moduleB