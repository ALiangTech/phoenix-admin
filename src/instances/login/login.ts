import type { App } from 'vue';
import { createApp } from 'vue';
import APP from './Login.vue';

export default async function MountLoginInstance() {
  const app: App = createApp(APP);
  // 页面挂载
  app.mount('#subApp');
  return app;
}
