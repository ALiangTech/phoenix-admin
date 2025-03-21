import 'virtual:uno.css';
import '@unocss/reset/normalize.css';
import './style.css';
import type { App } from 'vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia'
import APP from './App.vue';

const app: App = createApp(APP);
app.use(createPinia());
app.mount('#app');
