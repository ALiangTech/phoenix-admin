// uno.config.ts
import type { UserConfig } from 'unocss';
import {
  defineConfig,
  presetAttributify,
  presetWebFonts,
  presetWind,
} from 'unocss';
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx';

const config: UserConfig<any> = defineConfig({
  presets: [presetWind(), presetAttributify(), presetWebFonts()],
  shortcuts: {
    absoluteCenter: 'absolute left-50% top-50% translate--50%', // 相对定位居中
    flexCenter: 'flex justify-center items-center', // flex 居中
  },
  transformers: [
    transformerAttributifyJsx(), // <--
  ],
  theme: {},
  rules: [
    [/^grid-cols-(\d+)\/(\d+)$/, ([, a, b]) => ({ 'grid-template-columns': `${a}fr ${b}fr` })],
  ],
});

export default config;
