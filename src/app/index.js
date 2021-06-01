import Vue from 'vue';
import App from './components/App.vue';
import Registro from './components/Registro.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';


new Vue({
    render: f => f(Register),
}).$mount('#appH');

new Vue({
    render: f => f(Login),
}).$mount('#appL');

new Vue({
    render: r => r(Registro),
}).$mount('#RegistroApp');

new Vue({
    render: h => h(App),
}).$mount('#app');








