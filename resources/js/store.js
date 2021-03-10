import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: []
    },
    mutations: {
        DAPAT_TODO(state, todos) {
            state.todos = todos;
        },
        TAMBAH_TODO(state, todo) {
            state.todos.push(todo);
        },
        HAPUS_TODO(state, todo) {
            var todos = state.todos;
            console.log("indexOf todo", todos.indexOf(todo));
            todos.splice(todos.indexOf(todo), 1);
        },
        COMPLETE_TODO(state, todo) {
            todo.done != todo.done;
        }
    },
    actions: {
        DAPAT_TODO: ({ commit }) => {
            axios.get("/api/todos").then(res => {
                commit("DAPAT_TODO", res.data);
            });
        },
        TAMBAH_TODO: ({ commit, dispatch }, payload) => {
            axios
                .post("/api/todos", payload)
                .then(res => {
                    if (res.data === "added") {
                        console.log("ok");
                        dispatch("DAPAT_TODO");
                    }
                })
                .catch(err => console.log(err));
            //commit('TAMBAH_TODO', payload)
        },
        DELETE_TODO: ({ commit, dispatch }, payload) => {
            axios.delete(`/api/todos/${payload.id}`)
            .then(res => {
                    if (res.data === 'deleted') {
                         console.log('deleted')
                         dispatch('DAPAT_TODO')
                    }
            })
            //commit("HAPUS_TODO", payload);
        },
        COMPLETE_TODO: ({ commit, dispatch }, payload) => {
            axios.post(`/api/todos/${payload.id}`, { 
                title: payload.title,
                completed: payload.completed,
                _method:'patch'})
            .then(res => {
                if (res.data === 'updated') {
                    console.log('updated')
                    dispatch('DAPAT_TODO')
                }
            })
            //commit("COMPLETE_TODO", payload);
        }
    }
});
