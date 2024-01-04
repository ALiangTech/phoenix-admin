/// <reference types="vitest" />
import { defineConfig, mergeConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { compression } from 'vite-plugin-compression2';
import { createHtmlPlugin } from 'vite-plugin-html';
import { visualizer } from 'rollup-plugin-visualizer';
export default defineConfig(({ command }) => {
  // 通用配置
  const common = {
    plugins: [vue(), vueJsx()],
    test: {},
  };
  if (command === 'serve') {
    return mergeConfig(common, {
      // dev 独有配置
      plugins: [
        createHtmlPlugin({
          inject: {
            data: {
              title: 'ADMINS',
            },
          },
        }),
      ],
    });
  } else {
    // command === 'build'
    console.log('build');
    return mergeConfig(common, {
      // build 独有配置
      plugins: [
        compression({ include: [/\.(js)$/, /\.(css)$/, /\.(html)$/] }), // 构建产物压缩 gzip
        createHtmlPlugin({
          minify: true,
          inject: {
            data: {
              title: 'ADMINS-PROD',
            },
          },
        }), // index.html 插入数据
        visualizer({
          emitFile: true,
          filename: 'stats.html',
        }), // 构建产物文件大小分析
      ],
      build: {
        sourcemap: true,
      },
    });
  }
});
