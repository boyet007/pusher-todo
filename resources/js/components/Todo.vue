<template>
    <fragment>
        <input type="checkbox" @change="tick" v-model="todo.done"/>
        <span>{{ todo.text }}</span>
        <i @click="hapus" class="float-right fas fa-times-circle"></i>
    </fragment>
</template>
<script>
export default {
    methods: {
        tick() {
            this.$emit('tick')
        },
        hapus() {
            this.$emit('delete');
        }
    },
    props: ["todo"]
};
</script>
