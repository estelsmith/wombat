import App from '@/app.vue';
import Vue from 'vue';

new Vue({
    components: {
        App
    },
    render: (h) => h(App)
}).$mount('vue-app');
