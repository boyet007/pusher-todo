<template>
    <ul>
        <li v-for="todo in todos" :key="todo.id">
            <todo @delete="deleteTodo(todo.id)" :todo="todo" />
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
        ...mapActions([
            'deleteTodo'
        ])
    }
};
</script>
