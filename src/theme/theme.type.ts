import type { BuiltInGlobalTheme } from 'naive-ui/es/themes/interface';
import type { GlobalThemeOverrides } from 'naive-ui';

export type Appearance = 'system' | 'tint' | 'deep';
export interface Theme {
  theme: BuiltInGlobalTheme; // lightTheme 浅色 darkTheme 深色
  appearance: Appearance; // 外观  跟随系统 浅色 深色
  themeOverrides: GlobalThemeOverrides | null; // 主题覆盖
}
