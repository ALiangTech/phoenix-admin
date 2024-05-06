路由插件

## 功能

- [x] 构建路由
- [x] 过滤无权限路由
- [x] 构建菜单数据

### 为什么需要设置每一个路由的默认第一个路由

当一个路由下面有多个子级路路由,例如有下面路由

```js
 const routes = [{
  path: '/user',
  redirect: '/user/account',
  children: [{ path: 'account' }, { path: 'user' }]
}]
```