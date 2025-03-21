import type { GlobalThemeOverrides } from 'naive-ui';

const lightThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#aa54ff',
    primaryColorHover: '#851785FF',
    primaryColorPressed: '#760076FF',
    primaryColorSuppl: '#913094FF',
  },
  Form: {
    labelTextColor: '#EBEFF3FF',
  },
  Input: {
    color: '#FFFFFF00',
    colorFocus: '#FFFFFF00',
  },
};
const darkThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#aa54ff',
    primaryColorHover: '#851785FF',
    primaryColorPressed: '#760076FF',
    primaryColorSuppl: '#913094FF',
  },
  Form: {
    labelTextColor: '#EBEFF3FF',
  },
  Input: {
    color: '#FFFFFF00',
    colorFocus: '#FFFFFF00',
  },
};

export default { lightThemeOverrides, darkThemeOverrides };
