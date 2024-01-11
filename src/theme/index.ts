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

/**
 * @desc 切换主题
 */
export function switchTheme(themeType: string) {
  console.log(themeType);
}
