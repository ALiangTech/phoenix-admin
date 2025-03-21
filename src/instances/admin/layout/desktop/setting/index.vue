<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue';
import type { ComponentMap, MenuItem, MenusType } from './types.ts';
// 组件初始化
// 菜单切换 加载不同的配置 组件
function useMenus() {
  const menuComponentMap: ComponentMap = {
    account: defineAsyncComponent(() => import('./account.vue')),
    advanced: defineAsyncComponent(() => import('./advanced.vue')),
  };
  const menus: MenuItem[] = [
    {
      label: '账号',
      value: 'account',
    },
    {
      label: '高级设置',
      value: 'advanced',
    },
  ];
  const activeMenuValue = ref<MenusType>('advanced');

  function switchMenu(value: MenusType) {
    activeMenuValue.value = value;
  }

  return { menus, switchMenu, menuComponentMap, activeMenuValue };
}

const { menus, menuComponentMap, activeMenuValue } = useMenus();


</script>

<template>
  <section class="flex h-full bg-white">
    <!--    菜单-->
    <!--    具体内容配置组件-->
    <n-scrollbar>
      <keep-alive>
        <component
          :is="menuComponentMap[activeMenuValue]"
          class="flex-1"
        ></component>
      </keep-alive>
    </n-scrollbar>
  </section>
</template>
