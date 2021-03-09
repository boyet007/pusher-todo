import Vue from 'vue';
import Vuex from 'vuex';

Vue.use (Vuex);

export default new Vuex.Store({
    state: {
        todos: [
            { id:1, text: 'bersih-bersih', done: true },
            { id:2, text: 'kerjakan latihan todo', done: false },
            { id:3, text: 'makan malam', done: false },
            { id:4, text: 'tidur', done: false },
        ]
    },
    mutations: {
        
    },
    actions: {
        deleteTodo: ({ commit, state }, payload) => {
            state.todos = state.todos.filter(todo => todo.id !== payload)
        }
    }
})
