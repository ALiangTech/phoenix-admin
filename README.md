# 项目简介

为了方便快速搭建管理系统类项目，抽离常用的功能组合起来

项目采用多实例模式 整体分离成俩部分： 登录部分 + 业务部分 主要是方便权限计算


## 技术栈

vite + vue3 + ts + vue-router

css 使用[原子css](https://antfu.me/posts/reimagine-atomic-css-zh)方式: [unocss引擎](https://github.com/unocss/unocss)

## 测试

非浏览逻辑 走vitest测试

组件测试 和 e2e 走cypress

## 规范

- 语法规范默认采用的是腾讯发布的一版规范 [alloy/vue](https://github.com/AlloyTeam/eslint-config-alloy/blob/master/README.zh-CN.md)
- 风格规范默认采用Prettier的官方默认风格
- 标签规范采用的是stylelint的[stylelint-config-recommended-vue](https://github.com/ota-meshi/stylelint-config-recommended-vue)

## 项目依赖更新

为保持项目活性 定期执行pnpm outdated 查看需要升级的三方依赖
可以直接运行pnpm upp 来同步更新第三放包 进行大版本升级

**注意**
：大版本升级一定要去查看对应版本的注意事项
如果是X 修改 一定要注意
X 是主版本号(major)：修改了不兼容的 API
Y 是次版本号(minor)：新增了向下兼容的功能
Z 为修订号(patch)：修正了向下兼容的问题

## 防止路由嵌套太深 项目只配置到二级菜单

三级后的菜单 建议使用component 组件来实现

如果真有需要 手动修改菜单组件

## 接口响应规范

```typescript
  interface response {
    data: object | null,
    error: error[],
    code: number
  }
```


### 多实例渲染模式

登录界面作为一个单独实例进行渲染 类型 login
具体业务作为一个业务实例进行渲染 类型 admin



### 权限设计

#### 路由权限
拿到全部的路由信息 然后 过滤掉无权限的路由信息 获取到当前用户有权限的路由信息 然后注册这些有权限的路由信息
#### 元素权限
主要是控制页面元素是否展示
通过全局的hasPermission 组件控制
#### 逻辑权限
js里面的 通过全局保留权限实例来做？？？(暂定)







