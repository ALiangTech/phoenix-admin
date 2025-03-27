import type { GlobalThemeOverrides } from 'naive-ui';
import type { OverridesType } from './config/const'
export type { AppearanceType,ThemeType } from './config/const'

export type Overrides = Record<OverridesType, GlobalThemeOverrides>;

