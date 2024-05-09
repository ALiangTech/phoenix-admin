import type { AxiosInstance } from 'axios';
import * as localforage from 'localforage';
import { useDiscrete } from '@/hooks';
// 错误字典
const errorDic: Map<number, Function> = new Map();
errorDic.set(401, async () => {
  // 清除jwt
  await localforage.clear();
});
errorDic.set(0, (msg: string) => {
  // 网络异常
  const { message } = useDiscrete();
  message.error(msg);
});

export default function normalizeError(axios: AxiosInstance) {
  // 添加响应拦截器
  axios.interceptors.response.use(
    async response => {
      // 2xx 范围内的状态码都会触发该函数。
      // 检查data中的error是否是null 如果不为null 说明服务端返回的是错误信息
      const { data } = response;
      if (data.error) {
        // 这里给处理掉
        const errorInfo = await executeErrorHandle({ response: data.error });
        return Promise.reject(errorInfo);
      }
      return Promise.resolve(response);
    },
    async error => {
      // 对响应错误做点什么
      const errorInfo = await executeErrorHandle(error);
      return Promise.reject(errorInfo);
    },
  );
}

/**
 * 从错误对象中提取错误代码和错误信息。
 * @param error 任意类型的错误对象，期望包含响应信息（response）。
 * @returns 返回一个对象，包含错误代码（code）和错误信息（message）。
 */
function extractErrorCode(error: any) {
  const { response } = error; // 尝试从错误对象中提取响应信息
  // 如果response存在，则提取status；否则，将status设置为0，表示网络异常(离线或者服务端下线)
  const { status, statusText } = response || {
    status: 0,
    statusText: '当前网络异常,请稍后再试',
  };
  return { code: status, message: statusText };
}

/**
 * 执行错误处理的异步函数。
 * @param error 任意类型的错误对象，预期包含可以提取的错误代码和消息。
 */
async function executeErrorHandle(error: any) {
  const { code, message } = extractErrorCode(error);
  const fun = errorDic.get(code) || errorDic.get(0); // 默认走提示
  await (fun && fun(message));
  return { code, message };
}
