<template>
    <fragment>
        <input type="checkbox" v-model="todo.done"/>
        <span>{{ todo.text }}</span>
        <i @click="hapus" class="float-right fas fa-times-circle"></i>
    </fragment>
</template>
<script>
export default {
    methods: {
        hapus() {
            this.$emit('delete');
        }
    },
    props: ["todo"]
};
</script>
