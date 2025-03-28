import { useOsTheme, darkTheme, lightTheme } from 'naive-ui';
import { ref,markRaw, computed ,watch } from 'vue';
import { defineStore } from 'pinia'
import { useDark } from '@vueuse/core'
import { Appearance, Type } from './config/const'
import type { AppearanceType, ThemeType } from './config/const'
import type { Overrides } from './type.ts';

// 批量导入颜色主题
const themeModulePaths = import.meta.glob<Overrides>('./config/theme/*.ts', { import: 'default' });
const themeModules = Object.fromEntries(
  Object.entries(themeModulePaths).map(([key, value]) => {
    const matchAll = key.match(/\/([^\/]+)\.ts$/);
    return Array.isArray(matchAll) ? [matchAll[1], value] : [key, value];
  }),
);

// 创建pinia store
export const useThemeStore = defineStore('theme', () => {
   // 外观 暗色 or 亮色 or 跟随系统
   const osAppearance = useOsTheme(); // 操作系统外观 可能没有权限获取这个时候就是个null咯
   const projectAppearance = ref<AppearanceType>(Appearance.System); // 项目外观
   const appearance = computed(() => {
     const temp =  projectAppearance.value === Appearance.System ? osAppearance.value : projectAppearance.value
     return temp ? temp : Appearance.Light
   }) // 当前的外观
   const isDark = useDark({
      selector: 'html',
      attribute: 'data-theme',
      valueDark: Appearance.Dark,
      valueLight: Appearance.Light,
    })
   watch(appearance, (newAppearance) => {
     isDark.value = newAppearance === Appearance.Dark
   }, {
     immediate: true,
   })
   const handleSwitchProjectAppearance = (appearance: AppearanceType) => {
    projectAppearance.value = appearance
  }
   // 主题 红橙黄绿青蓝紫
   const type = ref<ThemeType>(Type.Blue);
   const themeOverrides = ref<Overrides>(); // 主题变量覆盖对象 用来覆盖其他主题变量
   // 监听主题变化
   watch(type, async (newType) => {
    const fetch = themeModules[newType];
    try {
      const overridesConfig = await fetch();
      themeOverrides.value = markRaw<Overrides>(overridesConfig);
    } catch (e) {
      console.error(e)
    }
  })
   const theme = computed(() => {
    return appearance.value === Appearance.Dark ? darkTheme : lightTheme
   })
   const overrides = computed(() => {
      const { lightThemeOverrides, darkThemeOverrides } = themeOverrides.value || {};
      return appearance.value === Appearance.Dark ? darkThemeOverrides : lightThemeOverrides
    })
   const handleSwitchThemeType = async (themeType: ThemeType) => {
     type.value = themeType;
   }

   return {
     appearance,
     isDark,
     type,
     theme,
     overrides,
     handleSwitchProjectAppearance,
     handleSwitchThemeType
   }
})
export * from './config/const.ts'
export { default as themeContainer} from './components/theme-container.vue'
