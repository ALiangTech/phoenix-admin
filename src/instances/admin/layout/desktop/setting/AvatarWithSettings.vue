<script setup lang="ts">
import { computed, defineAsyncComponent, ref, unref } from 'vue';
import type { ComponentMap, MenuItem, MenusType } from './types.ts';
import { useThemeVars } from 'naive-ui';
const name = ref('HAN');
const showModal = ref(false);
function openSettingDialog() {
  showModal.value = !unref(showModal);
}

// modal
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
  <section class="py-1 bg-#ccc overflow-hidden text-nowrap text-0 relative">
    <!--姓名-->
    <n-avatar
      class="inline-block mx-4 relative z-1"
      :style="{
        color: 'yellow',
        backgroundColor: 'red',
      }"
      >{{ name }}</n-avatar
    >
    <!--设置-->
    <div
      class="absolute top-50% translate-y--50% right-4 cursor-pointer"
      @click="openSettingDialog"
    >
      <svg class="w6 h6 ani-rotate">
        <use href="#setting-two"></use>
      </svg>
    </div>
  </section>
  <!--设置弹窗-->
  <n-modal v-model:show="showModal" :mask-closable="false">
    <section class="w-50vw h-50vh">
      <section class="flex h-full bg-white">
        <!--菜单-->
        <ZSlideTabs
          v-model="activeMenuValue"
          :list="menus"
          class="w-40 bg-#ccc"
        ></ZSlideTabs>
        <!-- 具体内容配置组件-->
        <n-scrollbar>
          <keep-alive>
            <component
              :is="menuComponentMap[activeMenuValue]"
              class="flex-1"
            ></component>
          </keep-alive>
        </n-scrollbar>
      </section>
      <button @click="openSettingDialog">ss</button>
    </section>
  </n-modal>
</template>

<style scoped>
/** 设置icon动画 */

.ani-rotate {
  animation: rotate linear 8s infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
