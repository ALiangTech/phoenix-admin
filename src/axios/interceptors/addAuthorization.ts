// 请求拦截器
// 请求前去系统里面获取 jwt 并设置在请求头里面

import type { AxiosInstance } from 'axios';

export default function addAuthorization(axios: AxiosInstance) {
  axios.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    // config.headers.Authorization = '123';
    return config;
  });
}
