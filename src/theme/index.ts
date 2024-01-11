import { useOsTheme, darkTheme, lightTheme, NConfigProvider } from 'naive-ui';
import { defineComponent, reactive, h, computed, unref } from 'vue';
import type { Theme, Appearance } from './theme.type.ts';

const config = reactive<Theme>({
  appearance: 'system',
  theme: lightTheme,
  themeOverrides: null,
});

// 基于naive-ui NConfigProvider 组件二次封装
export function createThemeProvider() {
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
const themeModules = import.meta.glob('./config/*.ts');
const typeThemeModules = Object.fromEntries(
  Object.entries(themeModules).map(([key, value]) => {
    const matchAll = key.match(/\/([^\/]+)\.ts$/);
    if (Array.isArray(matchAll)) {
      return [matchAll[1], value];
    }
    return [key, value];
  }),
);
/**
 * @desc 切换主题
 */
export function switchTheme(themeType: string) {
  const osThemeRef = useOsTheme();
  const fetch = typeThemeModules[themeType];
  fetch &&
    fetch().then((overridesConfig: any) => {
      const { lightThemeOverrides, darkThemeOverrides } =
        overridesConfig.default as any;
      function getCurrentOverrideTheme() {
        const appearance = config.appearance;
        switch (appearance) {
          case 'system':
            return unref(osThemeRef) === 'dark' ? darkTheme : lightTheme;
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
