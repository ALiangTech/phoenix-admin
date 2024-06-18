<script setup lang="ts">
import { computed, defineAsyncComponent, ref } from 'vue';
import type { ComponentMap, MenuItem, MenusType } from './types.ts';
import { useThemeVars } from 'naive-ui';
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

// 主题
function useTheme() {
  const themeVars = useThemeVars();
  const containerStyle = computed(() => {
    const { primaryColor } = themeVars.value;
    return {
      backgroundColor: primaryColor,
    };
  });
  return { containerStyle };
}

const { containerStyle } = useTheme();
console.log(containerStyle);
</script>

<template>
  <section class="flex h-full bg-white">
    <!--    菜单-->
    <ZSlideTabs
      v-model="activeMenuValue"
      :list="menus"
      class="w-40 bg-#ccc"
    ></ZSlideTabs>
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
