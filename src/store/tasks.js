import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
    state: () => ({
        tasks: [
            {name: 'my first task', content: 'finally works'},
        ],
        doneTasks: [
            {name: 'my first task', content: 'finally works'},
        ]
    }),
    mutations: {
        addTask(state, name, content) {
            state.tasks.push({
                name: name,
                content: content,
            })
            console.log(state.tasks)

        },
        deleteTask(state, task) {
            state.tasks.splice(state.tasks.indexOf(task), 1);
        },
        doneTask(state, task) {
            state.doneTasks.push({
           name:task.name,
           content:task.content
            })
            state.tasks.splice(state.tasks.indexOf(task), 1);
            console.log(state.doneTasks)
        }
    },
    actions: {
        addTasks({commit}, name, content) {
            commit('addTask', name, content)
        },
        deleteTask({commit}, task) {
            commit('deleteTask', task)
        },
        doneTask({commit}, task) {
            commit('doneTask', task)
        },

    },

}

export default moduleA