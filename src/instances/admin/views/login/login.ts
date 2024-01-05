import type { App } from 'vue';
import { createApp } from 'vue';
import '@unocss/reset/normalize.css';
import 'virtual:uno.css';
import APP from './LoginPage.vue';
const app: App = createApp(APP);
// 页面挂载
app.mount('#app');
