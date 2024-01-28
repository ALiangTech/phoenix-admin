import axios from 'axios';
import { isFunction } from 'lodash-es';
import addAuthorization from './interceptors/addAuthorization';
import normalizeResponse from './interceptors/normalizeResponse';
const http = axios.create({
  baseURL: import.meta.env.VITE_HTTP_URL,
  timeout: 6000,
});
addAuthorization(http);
normalizeResponse(http);
export default http;

// 通过代理http 来设置post  get 等函数统一的try catch

export const httpP = new Proxy(http, {
  get(target, property) {
    // 先判断是不是一个函数类型
    // 如果不是函数 直接返回
    // 如果是函数 则封装一下
    const tempTarget = Reflect.get(target, property);
    if (isFunction(tempTarget)) {
      return (...args) => {
        try {
          tempTarget.apply(target, args);
        } catch (e) {}
      };
    }
    return tempTarget;
  },
});
