<script lang="ts" setup>
import NavMenu from './menu/menu.vue';
import CollapsibleMenu from './CollapsibleMenu.vue';
import { ref } from 'vue';

defineOptions({
  name: 'DesktopLayoutEntry',
});
const collapsed = ref(true);
</script>

<template>
  <main>
    <n-layout has-sider>
      <n-layout-sider
        :collapsed="collapsed"
        :collapsed-width="64"
        :width="200"
        :native-scrollbar="false"
        collapse-mode="width"
        class="m-4 rounded-md border-1 border-solid border-gray-300 dark:border-gray-700 overflow-hidden"
        content-style="height:calc(100vh - 2rem - 2px);display:flex;flex-direction:column;"
      >
        <!-- logo -->
        <div class="flex justify-center items-center pt-4">
          <img src="../../../../assets/vue.svg" alt="logo" />
        </div>
        <!--菜单-->
        <NavMenu class="flex-1"></NavMenu>
        <CollapsibleMenu v-model="collapsed">折叠</CollapsibleMenu>
      </n-layout-sider>
      <n-layout-content
        content-style="height:100vh;display:flex;flex-direction:column;"
      >
        <div
          class="h-42px m-y-4 m-r-4 rounded-md border-1 border-solid border-gray-300 dark:border-gray-700 overflow-hidden"
        >
          header
        </div>
        <div
          class="flex-1 m-b-4 m-r-4 overflow-auto rounded-md border-1 border-solid border-gray-300 dark:border-gray-700 overflow-hidden"
        >
          <router-view></router-view>
        </div>
      </n-layout-content>
    </n-layout>
  </main>
</template>
