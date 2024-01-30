declare global {
  namespace Axios {
    interface Error {
      code: number; // 错误码
      message: string; // 错误信息
    }
    interface Result {
      error: null | Error;
      data: any;
    }
  }
}
