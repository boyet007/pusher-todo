require('./bootstrap');
import Vue from 'vue'
import App from './App.vue' 
import store from './store.js'
import { Plugin } from 'vue-fragment'


Vue.use(Plugin)

const app = new Vue({
    el: "#app",
    store,
    components: { App },
    created() {
        this.$store.dispatch('DAPAT_TODO');
        console.log('echo', Echo)
    },
    render: h=>h(App) 
});