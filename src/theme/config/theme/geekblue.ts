import type { GlobalThemeOverrides } from 'naive-ui';

const lightThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#2f54eb',
    primaryColorHover: '#851785FF',
    primaryColorPressed: '#760076FF',
    primaryColorSuppl: '#913094FF',
  },
  Form: {
    // labelTextColor: '#EBEFF3FF',
  },
  Input: {
    color: '#FFFFFF00',
    colorFocus: '#FFFFFF00',
  },
};
const darkThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#2f54ebFF',
    primaryColorHover: '#597ef7FF',
    primaryColorPressed: '#85a5ffFF',
    primaryColorSuppl: '#adc6ffFF',
    successColor: '#d6e4ffFF',
    successColorHover: '#d6e4ffFF',
    successColorPressed: '#d6e4ffFF',
    successColorSuppl: '#d6e4ffFF',
  },
  Form: {
    // labelTextColor: '#EBEFF3FF',
  },
  Input: {
    color: '#FFFFFF00',
    colorFocus: '#FFFFFF00',
  },
};

export default { lightThemeOverrides, darkThemeOverrides };
