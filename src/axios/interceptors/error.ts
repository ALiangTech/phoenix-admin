import { useDiscrete } from '@/hooks';
import type { AxiosInstance } from 'axios';
const SUCCESS_CODE = 0;
// 错误字典
const errorDic: Map<number, Function> = new Map();
errorDic.set(401, async () => {
  // 清除jwt
  localStorage.clear();
});
errorDic.set(0, (msg: string) => {
  // 网络异常
  const { message } = useDiscrete();
  message.error(msg);
});

export default function normalizeError(axios: AxiosInstance) {
  // 添加响应拦截器
  axios.interceptors.response.use(
    async (response ) => {
      // 2xx 范围内的状态码都会触发该函数。
      // 检查data中的code 是否是200 非200 可以认为是错误
      const { data } = response as Axios.NewAxiosResponse<any,any >; // todo 先用as 强制指定response类型
      if (data.code !== SUCCESS_CODE) {
        // 执行错误处理
        const errorInfo = await executeErrorHandle({ response: {status: 0,  statusText: data.msg} });
        return Promise.reject(errorInfo);
      } else {
        const { message } = useDiscrete();
        message.success('操作成功'); // todo 后面接受从服务的返回的提示信息
        return Promise.resolve(response);
      }
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
  const fun = errorDic.get(code) || errorDic.get(0); // 默认走系统提示
  await (fun && fun(message));
  return { code, message };
}
