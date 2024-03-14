// 请求拦截器
// 请求前去系统里面获取 jwt 并设置在请求头里面

import type { AxiosInstance } from 'axios';

export default function addAuthorization(axios: AxiosInstance) {
  axios.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    config.headers.Authorization =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiZGNmNDc0YTgtMTIzOS00OWQzLThkZGQtOTBjYjQ3ZDU0Njk5IiwiaXNzIjoiaGoiLCJzdWIiOiJzb21lYm9keSIsImF1ZCI6WyJzb21lYm9keV9lbHNlIl0sImV4cCI6MTcwNzEyMjQyMCwibmJmIjoxNzA3MTE4ODIwLCJpYXQiOjE3MDcxMTg4MjAsImp0aSI6IjEifQ.UbAIfRrAgv9hgmzPSX-wHMpKVPpVm4y0byo1mHbX108';
    return config;
  });
}
