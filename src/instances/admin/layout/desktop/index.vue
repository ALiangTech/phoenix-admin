<script lang="ts" setup>
import NavMenu from './menu/menu.vue';
import CollapsibleMenu from './CollapsibleMenu.vue';
import LayoutHeader from '@admin/layout/desktop/header.vue';
import Breadcrumb from './Breadcrumb.vue';
import { computed, ref } from 'vue';
import { useThemeVars } from 'naive-ui';

defineOptions({
  name: 'DesktopLayoutEntry',
});
const collapsed = ref(true);

// 根据naive ui 提供的useThemeVars 构建适合主题的样式
function withTheme() {
  const themeVars = useThemeVars();
  const style = computed(() => {
    return {
      backgroundColor: themeVars.value.tableColor,
      color: themeVars.value.textColor2,
    };
  });
  const primaryColor = computed(() => {
    return themeVars.value.primaryColor;
  });
  return {
    style,
    primaryColor,
  };
}

const { style, primaryColor } = withTheme();
</script>

<template>
  <main class="h-screen grid main-layout">
    <n-el
      tag="section"
      :style="{
       transition: '.3s var(--cubic-bezier-ease-in-out)',
       ...style,
      }"
      class="flex justify-between h-48px top-shadow breathing-element"
    >
      <div class="flex">
        <div class="flex items-center gap-4px p-l-12px">
          <img
            src="./../../assets/logo.svg"
            class="bg-custom"
            alt="logo"
            title="logo"
          />
          <h1 class="m-0 text-4">盘古科技</h1>
        </div>
        <CollapsibleMenu v-model="collapsed"></CollapsibleMenu>
      </div>
      <div>
        <LayoutHeader></LayoutHeader>
      </div>
    </n-el>
    <n-layout has-sider>
      <n-layout-sider
        :collapsed="collapsed"
        :collapsed-width="64"
        :width="200"
        :native-scrollbar="false"
        collapse-mode="width"
      >
        <NavMenu class="flex-1"></NavMenu>
      </n-layout-sider>
      <n-layout-content content-class="flex flex-col" >
        <Breadcrumb></Breadcrumb>
        <n-el
          tag="section"
          class="flex-1 overflow-hidden grid grid-rows-1 p-4"
          :style="{
           transition: '.3s var(--cubic-bezier-ease-in-out)',
           backgroundColor: 'var(--gap-color)',
          }">
          <n-el
            tag="div"
            class="overflow-hidden grid grid-rows-1"
            :style="{
           transition: '.3s var(--cubic-bezier-ease-in-out)',
           backgroundColor: 'var(--body-color)',
          }">
            <router-view></router-view>
          </n-el>
        </n-el>
      </n-layout-content>
    </n-layout>
  </main>
</template>
<style scoped>
.main-layout {
  grid-template-rows: auto 1fr;
}

.top-shadow {
  box-shadow: 0 2px 17px -1px v-bind(primaryColor);
  z-index: 4;
}

.breathing-element {
  animation: breathing 3s infinite ease-in-out;
}

@keyframes breathing {
  0% {
    box-shadow: 0 0 10px inset rgb(0 0 0 / 10%);
  }

  50% {
    box-shadow: 0 0 20px inset rgb(0 0 0 / 30%);
  }

  100% {
    box-shadow: 0 0 10px inset rgb(0 0 0 / 10%);
  }
}
</style>
