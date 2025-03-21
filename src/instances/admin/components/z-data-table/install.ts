// 解决webstrom 无法识别到全局组件问题 实际该函数不会被执行
import ZDataTable from './index.vue'
import type { App } from 'vue';
function install(Vue:App) {
  Vue.component('ZDataTable', ZDataTable);
  Vue.component('ZDataTableWrapper', {});
}
console.error(install)