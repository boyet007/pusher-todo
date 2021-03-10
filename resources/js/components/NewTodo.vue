<template>
    <div class="input-group mb-3">
        <input
            type="text"
            v-model="todoTeks"
            class="form-control"
            @keyup.enter="tambahTodo(todoTeks)"
        />
        <div class="input-group-append">
            <button
                @click="tambahTodo(todoTitle)"
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
export default {
    data: () => ({
        todoTeks: ""
    }),
    methods: {
        tambahTodo(title) {
            const todo = { title, done: false };
            this.$store.dispatch("TAMBAH_TODO", todo);
            this.todoTeks = "";
        }
    }
};
</script>
