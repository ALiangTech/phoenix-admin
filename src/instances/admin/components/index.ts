/**
 * 自动导入注册组件
 */
import type { App, ComponentOptions } from 'vue';
export {default as XDataTable} from './z-data-table/index.vue'
export {default as XDataTableWrapper} from './x-data-table-wrapper/index.vue'

const modules: Record<string, ComponentOptions> = import.meta.glob(
  './**/index.vue',
  {
    import: 'default',
    eager: true,
  },
);

export default function registerGlobalComponents(app: App) {
  Object.entries(modules).forEach(([key, value]) => {
    const { name } = value;
    if (name) {
      app.component(name, value);
    } else {
      console.warn('组件没有自动导入也有可能是没有index.vue文件导致');
      console.trace(
        `${key}该文件，无法自动注册，因为没有提供组件名称，请通过defineOptions添加组件name字段`,
      );
    }
  });
}
