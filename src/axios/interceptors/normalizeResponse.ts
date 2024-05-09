// 统一接口返回接口
import type { AxiosInstance } from 'axios';

export default function normalizeResponse(axios: AxiosInstance) {
  axios.interceptors.response.use(response => {
    return response.data.data;
  });
}
