<template>
    <div class="input-group mb-3">
        <input type="text" v-model="todoTeks" class="form-control" @keyup.enter="tambahTodo(todoTeks)" />
        <div class="input-group-append">
            <button
                @click="tambahTodo(todoTeks)"
                class="btn btn-outline-success"
                type="button"
            >
                <i class="fa fa-plus"></i>
            </button>
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";
import uniqid from "uniqid";
export default {
    data: () => ({
        todoTeks: ""
    }),
    methods: {
        tambahTodo(text) {
            const todo = { id: uniqid(), text, done: false };
            this.$store.dispatch("tambahTodo", todo);
            this.todoTeks = "";
        }
    }
};
</script>
