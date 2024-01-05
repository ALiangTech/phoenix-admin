import type { App } from 'vue';
import { createApp } from 'vue';
import APP from './LoginPage.vue';

export default function MountLoginInstance() {
  const app: App = createApp(APP);
  // 页面挂载
  app.mount('#app');
}
