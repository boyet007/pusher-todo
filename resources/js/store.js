import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [
            { id: 1, text: 'bersih-bersih', done: true },
            { id: 2, text: 'kerjakan latihan todo', done: false },
            { id: 3, text: 'makan malam', done: false },
            { id: 4, text: 'tidur', done: false },
        ]
    },
    mutations: {
        TAMBAH_TODO(state, todo) {
            state.todos.push(todo)
        },
        HAPUS_TODO(state, todo) {
            var todos = state.todos
            console.log('indexOf todo', todos.indexOf(todo))
            todos.splice(todos.indexOf(todo), 1)
        },
        COMPLETE_TODO(state, todo) {
            todo.done != todo.done
        }
    },
    actions: {
        tambahTodo: ({ commit }, payload) => {
            commit('TAMBAH_TODO', payload)
        },
        deleteTodo: ({ commit }, payload) => {
            commit('HAPUS_TODO', payload)
        },
        completeTodo: ({ commit }, payload) => {
            commit('COMPLETE_TODO', payload)
        }
    }
})
