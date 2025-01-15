import './assets/style.css';
import Swal from 'sweetalert2';

import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import { initComponent } from './utils/init-component';

const app = createApp(App);

const pinia = createPinia();

initComponent(app);

app.use(pinia);
app.use(router);

app.mount('#app');
