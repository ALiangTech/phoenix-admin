declare namespace Axios {
  interface Error {
    status: number;
    statusText: string;
  }

  interface Result {
    error: Error | null;
    data: any;
  }
}
