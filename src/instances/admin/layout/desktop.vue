<script setup lang="ts">
import NavMenu from './desktop/menu.vue';
import { menu } from '@admin/routers';
import Setting from './desktop/setting.vue';

defineOptions({
  name: 'DefaultDesktop',
});
</script>

<template>
  <main class="h-screen">
    <n-layout has-sider>
      <n-layout-sider
        :collapsed-width="64"
        :width="200"
        :native-scrollbar="false"
        bordered
        collapse-mode="width"
        content-style=""
        show-trigger="bar"
      >
        <section class="flex flex-col h-screen">
          <div class="flex justify-center items-center pt-4">
            <img src="@/assets/vue.svg" alt="logo" />
          </div>
          <NavMenu class="flex-1" :menu-list="menu"></NavMenu>
          <Setting></Setting>
        </section>
      </n-layout-sider>
      <n-layout-content content-style="height:100vh">
        <router-view></router-view>
      </n-layout-content>
    </n-layout>
  </main>
</template>
