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
            img_url: "../images/todo.png",
        };
    },
    components: { TodoList, NewTodo },
 
};
</script>
