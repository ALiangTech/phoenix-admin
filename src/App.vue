<template>
  <div id="subApp"></div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import MountLoginInstance from './instances/login/login';
import MountAdminInstance from '@admin/admin.ts';
import { unref, watchPostEffect } from 'vue';
import { useModifyInstanceType } from '@/hooks';
import type { InstanceType } from '@/hooks';
import type { App } from 'vue';

const { instanceType } = useModifyInstanceType();

/**
 * 实例对象，键为实例类型，值为对应实例的函数
 */
const instanceMap: Map<InstanceType, InstanceRenderFun> = new Map([
  ['login', MountLoginInstance],
  ['admin', MountAdminInstance],
]);

let instance: App;

async function render() {
  const type = unref(instanceType);
  // 根据实例类型获取对应的实例函数
  const instanceFunction = type
    ? instanceMap.get(type as InstanceType)
    : instanceMap.get('login');

  if (instanceFunction) {
    instance && instance.unmount(); // 挂载新的实例之前 卸载旧实例
    instance = await instanceFunction();
  }
}

/**
 * 渲染中间动画
 * 流程: 动画 渲染 动画
 */
async function applyAnimation() {
  gsap.fromTo('#subApp', { scale: 0 }, { scale: 1, duration: 2 });
  await render();
}

watchPostEffect(async () => {
  await applyAnimation();
});
</script>
