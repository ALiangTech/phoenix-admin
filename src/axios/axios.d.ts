declare namespace Axios {
  // 定义你的响应数据接口
   interface ApiResponse<T = any> {
    code: number;
    msg: string;
    data: T;
  }
   interface NewAxiosResponse<T = any, D = any> extends AxiosResponse {
    data: ApiResponse<T>;
    config: D;
  }
}

