declare namespace Axios {
  interface Error {
    code: number;
    message: string;
  }
  interface Result {
    error: Error | null;
    data: any;
  }
}
