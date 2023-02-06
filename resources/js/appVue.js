import { createApp } from "vue";

import App from './App.vue';

import '../scss/appVue.scss';

import * as bootstrap from 'bootstrap';

import { router } from './router';

createApp(App).use(router).mount('#app');
