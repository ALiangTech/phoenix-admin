// 统一接口返回接口
import type { AxiosInstance } from 'axios';

export default function normalizeResponse(axios: AxiosInstance) {
  axios.interceptors.request.use(response => {
    // 在发送请求之前做些什么
    return response.data;
  });
}
