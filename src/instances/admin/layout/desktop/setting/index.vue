<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue';
import type { ComponentMap, MenuItem, MenusType } from './types.ts';
// import { useThemeVars } from 'naive-ui'
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
  const activeMenuValue = ref<MenusType>('account');
  function switchMenu(value: MenusType) {
    activeMenuValue.value = value;
  }
  return { menus, switchMenu, menuComponentMap, activeMenuValue };
}
const { menus, menuComponentMap, activeMenuValue } = useMenus();

// 主题
// function useTheme () {
//   const themeVars = useThemeVars()
// }
</script>

<template>
  <section class="flex h-full p-4">
    <!--    菜单-->
    <ZSlideTabs v-model="activeMenuValue" :list="menus"></ZSlideTabs>
    <!--    具体内容配置组件-->
    <component :is="menuComponentMap[activeMenuValue]"></component>
  </section>
</template>
