declare global {
  namespace Axios {
    interface Result {
      msg: string;
      data: any;
      status: number;
    }
  }
}
