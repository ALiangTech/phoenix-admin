// 统一接口返回接口
import type { AxiosInstance } from 'axios';
import * as localforage from 'localforage';

// 错误字典
const errorDic: Map<number, Function> = new Map();
errorDic.set(401, async () => {
  // 清除jwt
  await localforage.clear();
});

export default function normalizeError(axios: AxiosInstance) {
  // 添加响应拦截器
  axios.interceptors.response.use(
    response => {
      // 2xx 范围内的状态码都会触发该函数。
      // 检查data中的error是否是null 如果不为null 说明服务端返回的是错误信息
      const { data } = response;
      if (data.error) {
        // 这里给处理掉
      }
      return response;
    },
    async error => {
      // 超出 2xx 范围的状态码都会触发该函数。
      // 对响应错误做点什么
      const {
        response: { status, statusText },
      } = error;
      const fun = errorDic.get(status);
      await (fun && fun());
      return Promise.reject(statusText);
    },
  );
}
