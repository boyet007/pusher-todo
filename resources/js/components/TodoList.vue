<template>
    <ul>
        <li v-for="todo in todos" :key="todo.id">
            <todo @tick="completeTodo(todo)" @delete="deleteTodo(todo)" :todo="todo" />
        </li>
    </ul>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Todo from "./Todo.vue";
export default {
    computed: {
        ...mapState({
            todos: state => state.todos
        })
    },
    components: { Todo },
    methods: {
        deleteTodo(id) {
            this.$store.dispatch('DELETE_TODO', id);
        },
        completeTodo(todo) {
            this.$store.dispatch('COMPLETE_TODO', todo)
        }
    },
      mounted() {
        this.$store.dispatch('DAPAT_TODO');
    }
};
</script>
