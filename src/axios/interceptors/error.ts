// 统一接口返回接口
import type { AxiosInstance } from 'axios';
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
    error => {
      // 超出 2xx 范围的状态码都会触发该函数。
      // 对响应错误做点什么
      const {
        response: { status, statusText },
      } = error;
      console.log(status, statusText);
      return Promise.reject(error);
    },
  );
}
