import axios from 'axios';
import addAuthorization from './interceptors/addAuthorization';
import normalizeResponse from './interceptors/normalizeResponse';
import normalizeError from './interceptors/error';

const http = axios.create({
  // 这里没有配置baseURL 会走vite代理 分发到后端
  timeout: 6000,
});
addAuthorization(http);
normalizeError(http);
normalizeResponse(http);
export default http;
