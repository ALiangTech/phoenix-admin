import { useOsTheme, darkTheme, lightTheme, NConfigProvider } from 'naive-ui';
import { defineComponent, reactive, h, computed, unref } from 'vue';
import type { Theme, Appearance } from './theme.type.ts';
export type { Theme, Appearance } from './theme.type.ts';

// 提供主题变量配置对象
// 向外提供一个基于naive-ui 的二次封装的主题组件
// 切换外观 函数
// 切换主题 函数

const config = reactive<Theme>({
  appearance: 'system', // 外观
  theme: lightTheme, // 主题
  themeOverrides: null, // 主题覆盖
});

// 基于naive-ui NConfigProvider 组件二次封装
export function createThemeConfigProvider() {
  return defineComponent((_, ctx) => {
    const { slots } = ctx;
    const osThemeRef = useOsTheme();
    const activeTheme = computed(() => {
      const appearance = config.appearance;
      switch (appearance) {
        case 'system':
          return unref(osThemeRef) === 'dark' ? darkTheme : lightTheme;
        case 'tint':
          return lightTheme;
        case 'deep':
          return darkTheme;
        default:
          return lightTheme;
      }
    });
    return () =>
      h(
        NConfigProvider,
        {
          abstract: true,
          theme: activeTheme.value,
          themeOverrides: config.themeOverrides,
        },
        slots,
      );
  });
}

/**
 * 切换外观
 * @param appearance
 */
export function switchAppearance(appearance: Appearance): void {
  config.appearance = appearance;
}

// 批量导入颜色主题
const themeModulePaths = import.meta.glob('./config/*.ts');
const themeModules = Object.fromEntries(
  Object.entries(themeModulePaths).map(([key, value]) => {
    const matchAll = key.match(/\/([^\/]+)\.ts$/);
    return Array.isArray(matchAll) ? [matchAll[1], value] : [key, value];
  }),
);

/**
 * @desc 切换主题
 */
export function switchTheme(themeType: string) {
  const osThemeRef = useOsTheme();
  const fetch = themeModules[themeType];
  fetch &&
    fetch().then((overridesConfig: any) => {
      const { lightThemeOverrides, darkThemeOverrides } =
        overridesConfig.default as any;
      function getCurrentOverrideTheme() {
        const appearance = config.appearance;
        switch (appearance) {
          case 'system':
            return unref(osThemeRef) === 'dark'
              ? lightThemeOverrides
              : darkThemeOverrides;
          case 'tint':
            return lightThemeOverrides;
          case 'deep':
            return darkThemeOverrides;
          default:
            return null;
        }
      }
      config.themeOverrides = getCurrentOverrideTheme();
      console.log(config.themeOverrides);
    });
}
