export const Appearance = {
  System: 'system',
  Light: 'light',
  Dark: 'dark',
} as const;

export type AppearanceType = typeof Appearance[keyof typeof Appearance];

export const Overrides = {
  LightThemeOverrides:'lightThemeOverrides',
  DarkThemeOverrides:'darkThemeOverrides',
}
export type OverridesType = typeof Overrides[keyof typeof Overrides];

export const Type = {
  GeekBlue: 'geekblue',
  Blue: 'blue',
  Cyan: 'cyan',
  Gold: 'gold',
} as const;

export type ThemeType = typeof Type[keyof typeof Type];
