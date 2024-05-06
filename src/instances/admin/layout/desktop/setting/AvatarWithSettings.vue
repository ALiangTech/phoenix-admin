<script setup lang="ts">
import { computed, defineAsyncComponent, ref, unref } from 'vue';
import type { ComponentMap, MenuItem, MenusType } from './types.ts';
import { useThemeVars } from 'naive-ui';

const name = ref('胡军');
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
  const currentTab = ref<MenusType>('account');

  function switchMenu(value: MenusType) {
    currentTab.value = value;
  }

  return { menus, switchMenu, menuComponentMap, currentTab };
}

const { menus, menuComponentMap, currentTab } = useMenus();

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
  <section
    class="h-13 bg-#ccc overflow-hidden text-nowrap text-0 relative cursor-pointer"
    @click="openSettingDialog"
  >
    <!--姓名-->
    <n-avatar
      class="inline-block m-x-15px m-y-1 relative z-1"
      :style="containerStyle"
      >{{ name }}
    </n-avatar>
    <!--设置-->
    <div class="absolute top-50% translate-y--50% right-15px cursor-pointer">
      <svg class="w6 h6 ani-rotate">
        <use href="#setting-two"></use>
      </svg>
    </div>
  </section>
  <!--设置弹窗-->
  <n-modal
    v-model:show="showModal"
    preset="card"
    :mask-closable="false"
    class="w-50vw"
    title="设置中心"
  >
    <section class="h-55vh">
      <section class="flex flex-col h-full bg-white">
        <!--菜单-->
        <n-tabs v-model:value="currentTab" type="line" animated>
          <template v-for="item of menus" :key="item.value">
            <n-tab :name="item.value">{{ item.label }}</n-tab>
          </template>
        </n-tabs>
        <!-- 具体内容配置组件-->
        <n-scrollbar class="flex-1">
          <keep-alive>
            <component
              :is="menuComponentMap[currentTab]"
              class="flex-1"
            ></component>
          </keep-alive>
        </n-scrollbar>
      </section>
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
