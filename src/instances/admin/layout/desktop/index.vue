<script lang="ts" setup>
import NavMenu from './menu/menu.vue';
import CollapsibleMenu from './CollapsibleMenu.vue';
import LayoutHeader from '@admin/layout/desktop/header.vue';
import Breadcrumb from './Breadcrumb.vue';
import { ref, watchPostEffect, unref } from 'vue';
import { gsap } from 'gsap';

defineOptions({
  name: 'DesktopLayoutEntry',
});
const collapsed = ref(true);
watchPostEffect(() => {
  if (unref(collapsed)) {
    // 折叠
    gsap.to('.w-animation', { width: '20px', duration: 0.5 });
  } else {
    gsap.to('.w-animation', { width: '142px', duration: 0.5 });
  }
});
</script>

<template>
  <main class="h-screen grid main-layout">
    <section class="flex justify-between h-48px top-shadow">
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
        <div class="flex-1 overflow-hidden p-2 bg-#f5f5f5">
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
  box-shadow: 0 5px 10px 0 #d10ff426;
  z-index: 4;
}

.bg-custom {
  background-image: linear-gradient(180deg, #2d79eb, #af0ce8);
  height: 24px;
  width: 24px;
  border-radius: 2px;
}
</style>
