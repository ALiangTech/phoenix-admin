import type { GlobalThemeOverrides } from 'naive-ui';
import type {OverridesType, ThemeType, SystemTheme, Appearance, } from './config/const'


export type Overrides = Record<OverridesType, GlobalThemeOverrides>;
export type ThemeConfig = Partial<Record<ThemeType, Overrides>>;
export interface State {
  appearance: Appearance; // 当前系统外观  跟随系统 浅色 深色
  osTheme: SystemTheme | null; // 当前浏览器系统主题
  themeOverrides: ThemeConfig;
  themeType: ThemeType;
}

