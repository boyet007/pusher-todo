<template>
    <div class="h-100 d-flex justify-content-center align-items-center mx-2">
        <div class="card border-success" style="width: 40rem">
            <div class="card-body">
                <img class="card-img-top" :src="img_url" />
                <div class="card-body">
                    <todo-list />
                </div>
                <div class="card-actions">
                    <new-todo />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NewTodo from "./components/NewTodo.vue";
import TodoList from "./components/TodoList";
export default {
    data() {
        return {
            img_url: "../images/todo.png"
        };
    },
    components: { TodoList, NewTodo },
    mounted() {
        window.Echo.channel("newTask").listen(".task-created", e => {
            this.$store.dispatch("DAPAT_TODO");
        });
        window.Echo.channel("taskRemoved").listen(".task-removed", e => {
            this.$store.dispatch("DAPAT_TODO");
        });
    }
};
</script>
