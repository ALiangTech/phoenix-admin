// 组件外部使用弹窗
// 禁止在组件内部使用
import type { ConfigProviderProps } from 'naive-ui';
import { createDiscreteApi, lightTheme } from 'naive-ui';

export function useDiscrete() {
  const { message } = createDiscreteApi(
    ['message', 'notification', 'dialog', 'loadingBar'],
    {
      configProviderProps: {
        theme: lightTheme,
      } satisfies ConfigProviderProps,
    },
  );

  return {
    message,
  };
}
