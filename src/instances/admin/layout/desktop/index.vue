<script lang="ts" setup>
import { LayoutHeader,LayoutNavMenu, LayoutBreadcrumb } from './widgets'
import {ref } from 'vue';

defineOptions({
  name: 'DesktopLayoutEntry',
});
const collapsed = ref(true);
</script>

<template>
  <n-el tag="main" class="h-screen grid grid-rows-[auto_1fr]">
    <LayoutHeader v-model="collapsed"></LayoutHeader>
    <n-layout has-sider>
      <n-layout-sider
        :collapsed="collapsed"
        :collapsed-width="64"
        :width="200"
        :native-scrollbar="false"
        collapse-mode="width"
      >
        <LayoutNavMenu class="flex-1"></LayoutNavMenu>
      </n-layout-sider>
      <n-layout-content content-class="flex flex-col" >
        <LayoutBreadcrumb></LayoutBreadcrumb>
        <section
          class="flex-1 overflow-hidden grid grid-rows-1 p-4"
          :style="{
           transition: '.3s var(--cubic-bezier-ease-in-out)',
           backgroundColor: 'var(--gap-color)',
          }">
          <div
            class="overflow-hidden grid grid-rows-1"
            :style="{
             transition: '.3s var(--cubic-bezier-ease-in-out)',
             backgroundColor: 'var(--body-color)',
          }">
            <router-view></router-view>
          </div>
        </section>
      </n-layout-content>
    </n-layout>
  </n-el>
</template>
<style scoped>
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
