<script setup lang="ts">
import NavMenu from './desktop/menu.vue';
import { menu } from '@admin/routers';

defineOptions({
  name: 'DefaultDesktop',
});
</script>

<template>
  <main class="h-full">
    <n-layout has-sider>
      <n-layout-sider
        :collapsed-width="64"
        :width="200"
        bordered
        collapse-mode="width"
        content-style=""
        show-trigger="bar"
      >
        logo
        <NavMenu :menu-list="menu"></NavMenu>
        config
      </n-layout-sider>
      <n-layout-content content-style="height:100vh">
        <section class="pl-16px h-100%">
          <slot name="content"></slot>
        </section>
      </n-layout-content>
    </n-layout>
  </main>
</template>
