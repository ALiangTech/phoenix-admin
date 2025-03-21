import { useOsTheme, darkTheme, lightTheme } from 'naive-ui';
import { unref,markRaw } from 'vue';
import { defineStore } from 'pinia'
import type { State,Overrides } from './type.ts';
import type { GlobalThemeOverrides } from 'naive-ui';
import { Appearance,ThemeType,SystemTheme } from './config/const'
export type { State } from './type.ts';
export { default as themeContainer} from './components/theme-container.vue'
// 批量导入颜色主题
const themeModulePaths = import.meta.glob<Overrides>('./config/theme/*.ts', { import: 'default' });
const themeModules = Object.fromEntries(
  Object.entries(themeModulePaths).map(([key, value]) => {
    const matchAll = key.match(/\/([^\/]+)\.ts$/);
    return Array.isArray(matchAll) ? [matchAll[1], value] : [key, value];
  }),
);

// 创建pinia store
export const useThemeStore = defineStore('theme', {
  state: (): State => {
    const osThemeRef = useOsTheme();
    return {
      appearance: Appearance.System,
      osTheme: unref(osThemeRef) as SystemTheme ,
      themeType: ThemeType.Blue,
      themeOverrides: {}
    }
  },
  getters: {
    getTheme(state) {
      const { appearance, osTheme } = state
      if (appearance === Appearance.System) {
        return osTheme === SystemTheme.Dark ? darkTheme : lightTheme
      } else {
        return appearance === Appearance.Dark ? darkTheme : lightTheme
      }
    },
    getThemeOverride(state): GlobalThemeOverrides | undefined {
      const { themeOverrides,themeType,appearance,osTheme } = state;
      const { lightThemeOverrides, darkThemeOverrides } = themeOverrides[themeType] || {};
      if (appearance === Appearance.System) {
        return osTheme === SystemTheme.Dark ? darkThemeOverrides : lightThemeOverrides
      } else {
        return appearance === Appearance.Dark ? darkThemeOverrides : lightThemeOverrides
      }
    }
  },
  actions: {
    // 给html添加data-theme 属性
    setTheme(): void {
      const { appearance, osTheme } = this
      if (appearance === Appearance.System) {
        document.documentElement.setAttribute('data-theme', osTheme === SystemTheme.Dark ? SystemTheme.Dark  : SystemTheme.Light)
      } else {
        document.documentElement.setAttribute('data-theme', appearance === Appearance.Dark ? SystemTheme.Dark  : SystemTheme.Light)
      }
    },
    // 切换外观 暗黑 亮色 or 跟随系统
    switchAppearance(appearance: Appearance): void {
      this.appearance = appearance
      this.setTheme();
    },
    // 切换主题 蓝色 绿色 or 灰色
    async switchTheme(themeType: ThemeType) {
      const fetch = themeModules[themeType];
      try {
        const overridesConfig = await fetch();
        this.themeType = themeType;
        this.themeOverrides[themeType] = markRaw<Overrides>(overridesConfig);
      } catch (e) {
        console.error(e)
      }
    }
  }
})
