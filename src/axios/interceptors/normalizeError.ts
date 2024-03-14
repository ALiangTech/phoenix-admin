// 统一接口返回接口
import type { AxiosInstance } from 'axios';

export default function normalizeError(axios: AxiosInstance) {
  // 添加响应拦截器
  axios.interceptors.response.use(
    response => {
      // 2xx 范围内的状态码都会触发该函数。
      // 对响应数据做点什么
      const data = response.data;
      if (data?.error) {
        alert(data.error?.message);
      }
      return response;
    },
    error => {
      // 超出 2xx 范围的状态码都会触发该函数。
      // 对响应错误做点什么 系统提示
      console.log(error);
      alert(error.message);
      return Promise.reject(error);
    },
  );
}
