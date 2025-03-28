export const Appearance = {
  System: 'system',
  Light: 'light',
  Dark: 'dark',
} as const;

export type AppearanceType = typeof Appearance[keyof typeof Appearance];

interface AppearanceItem {
  label: string;
  value: AppearanceType;
  color: string;
}

export const appearanceOptions: AppearanceItem[] = [
  {
    label: '跟随系统',
    value: Appearance.System,
    color: 'linear-gradient(45deg, #1b1b1b 50%, #ededed 50%)',
  },
  {
    label: '浅色',
    value: Appearance.Light,
    color: '#ededed',
  },
  {
    label: '深色',
    value: Appearance.Dark,
    color: '#1b1b1b',
  },
];

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
  Green: 'green',
  Purple: 'purple',
  Red: 'red',
  Yellow: 'yellow',
  Magenta: 'magenta',
  Volcano: 'volcano',
  Lime: 'lime',
  Orange: 'orange'
} as const;

export type ThemeType = typeof Type[keyof typeof Type];

interface themeItem {
  label: string;
  value: ThemeType;
  color: string;
}

export const themeOptions:themeItem[] = [
  {
    label: '薄暮',
    value: 'red',
    color: '#f5222d',
  },
  {
    label: '火山',
    value: 'volcano',
    color: '#fa541c',
  },
  {
    label: '日暮',
    value: 'orange',
    color: '#fa8c16',
  },
  {
    label: '金盏花',
    value: 'gold',
    color: '#faad14',
  },
  {
    label: '日出',
    value: 'yellow',
    color: '#fadb14',
  },
  {
    label: '青柠',
    value: 'lime',
    color: '#a0d911',
  },
  {
    label: '极光绿',
    value: 'green',
    color: '#52c41a',
  },
  {
    label: '明青',
    value: 'cyan',
    color: '#f0f5ff',
  },
  {
    label: '拂晓蓝',
    value: 'blue',
    color: '#1677ff',
  },
  {
    label: '极客蓝',
    value: 'geekblue',
    color: '#2f54eb',
  },
  {
    label: '酱紫',
    value: 'purple',
    color: '#722ed1',
  },
  {
    label: '法式洋红',
    value: 'magenta',
    color: '#eb2f96',
  },
];
