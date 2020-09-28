import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

    const moduleA = {
        state: () => ({
           tasks:[]
        }),
        mutations: {
            addTask (state, task) {
                let name=task.name
                let content=task.content
                state.tasks.name.push(name)
                state.tasks.content.push(content)

            }
        },
        actions:{
            addTasks({commit},task){
                commit('addTask',task)
            }
        }
    }

export default moduleA