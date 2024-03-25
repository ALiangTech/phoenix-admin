// 请求拦截器
// 请求前去系统里面获取 jwt 并设置在请求头里面

import type { AxiosInstance } from 'axios';
import LocalForage from '@/localforage';

export default function addAuthorization(axios: AxiosInstance) {
  axios.interceptors.request.use(async config => {
    // 在发送请求之前做些什么
    config.headers.Authorization = (await LocalForage.getItem('jwt')) as string;
    return config;
  });
}
