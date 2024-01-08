import type { GlobalThemeOverrides } from 'naive-ui';
import { useOsTheme, darkTheme } from 'naive-ui';
import { reactive } from 'vue';
import type { BuiltInGlobalTheme } from 'naive-ui/es/themes/interface';

// 根据当前系统 自动切换
// 覆盖原有主题

const lightThemeOverrides = {
  common: {},
  // ...
};

const darkThemeOverrides = {
  common: {},
  // ...
};
interface Theme {
  theme: BuiltInGlobalTheme | null;
  themeOverrides: GlobalThemeOverrides | null;
}
const theme = reactive<Theme>({
  theme: null,
  themeOverrides: lightThemeOverrides,
});
export default function useTheme() {
  const osThemeRef = useOsTheme();
  if (osThemeRef.value === 'dark') {
    theme.theme = darkTheme;
    theme.themeOverrides = darkThemeOverrides;
  }
  return { theme };
}

export function changeTheme() {
  theme.themeOverrides = null;
}

export function setTheme() {
  theme.theme = theme.theme === null ? darkTheme : null;
  console.log(theme);
}
