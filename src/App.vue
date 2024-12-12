<template>
  <section id="subApp" class="h-full w-full"></section>
</template>

<script setup lang="ts">
import MountLoginInstance from './instances/login/login';
import MountAdminInstance from '@admin/admin.ts';
import type { App } from 'vue';
import { unref, watchPostEffect } from 'vue';
import type { InstanceType } from '@/hooks';
import { useModifyInstanceType } from '@/hooks';
import { switchTheme } from '@/theme';

const { instanceType } = useModifyInstanceType();
let instance: App;

/**
 * 挂载实例函数，键为实例类型，值为对应实例的挂载函数
 */
const instanceMap: Map<InstanceType, InstanceRenderFun> = new Map([
  ['login', MountLoginInstance],
  ['admin', MountAdminInstance], // todo 改成按需导入 首页加载资源更少
]);

// 执行挂载函数
async function executeMountFunction() {
  const type = unref(instanceType) || 'login'; // 添加一个login默认值 防止手动修改了本地存放的实例类型导致找不到实例函数
  // 根据实例类型获取对应的实例函数
  const instanceMountFunction = instanceMap.get(type);

  if (instanceMountFunction) {
    instance && instance.unmount(); // 挂载新的实例之前 卸载旧实例
    await switchTheme('geekblue'); // 默认极客蓝主题 //todo 可能需要优化 后面在想想主题的设置
    instance = await instanceMountFunction();
  }
}

/**
 * 渲染中间动画
 * 流程: 动画 渲染 动画
 */
async function applyAnimation() {
  await executeMountFunction();
}

watchPostEffect(async () => {
  await applyAnimation(); // 监听实例类型的变化 执行挂载函数
});
</script>
