import Vue from 'vue';
import App from './components/App.vue';
import Registro from './components/Registro.vue';

new Vue({
    render: h => h(App),
}).$mount('#app');

new Vue({
    render: r => r(Registro),
}).$mount('#RegistroApp');





