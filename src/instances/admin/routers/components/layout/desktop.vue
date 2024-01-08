<script setup lang="ts">
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
        <slot name="menu"></slot>
      </n-layout-sider>
      <n-layout-content content-style="height:100vh">
        <section class="pl-16px h-100%">
          <slot name="content"></slot>
        </section>
      </n-layout-content>
    </n-layout>
  </main>
</template>
