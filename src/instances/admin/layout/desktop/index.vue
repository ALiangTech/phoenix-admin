<script lang="ts" setup>
import NavMenu from './menu/menu.vue';
import CollapsibleMenu from './CollapsibleMenu.vue';
import LayoutHeader from '@admin/layout/desktop/header.vue';
import Breadcrumb from './Breadcrumb.vue';
import { computed, ref } from 'vue';
import { useThemeVars } from 'naive-ui';
import { rgba } from 'seemly';

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
    console.log(rgba(themeVars.value.primaryColor));
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
    <section
      :style="style"
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
    </section>
    <n-layout has-sider>
      <n-layout-sider
        :collapsed="collapsed"
        :collapsed-width="64"
        :width="200"
        :native-scrollbar="false"
        collapse-mode="width"
        class=""
        content-style=""
      >
        <NavMenu class="flex-1"></NavMenu>
      </n-layout-sider>
      <n-layout-content content-class="flex flex-col">
        <Breadcrumb></Breadcrumb>
        <div class="flex-1 overflow-hidden p-2">
          <router-view></router-view>
        </div>
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

.bg-custom {
  background-image: linear-gradient(180deg, #2d79eb, #af0ce8);
  height: 24px;
  width: 24px;
  border-radius: 2px;
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
