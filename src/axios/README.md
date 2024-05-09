# 请求模块

用于处理系统内的http请求

## 接口统一返回格式

```ts
interface Response<T> {
  data: T,
  error: {
    code: number,
    msg: string,
  }
}
```

## 拦截器

addAuthorization 用于添加认证请求头
normalizeResponse 用于序列化接口的统一返回
