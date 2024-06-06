<script lang="ts" setup>
import NavMenu from './menu/menu.vue';
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
        bordered
        collapse-mode="width"
        content-style="height:100vh;display:flex;flex-direction:column;"
      >
        <!-- logo -->
        <div class="flex justify-center items-center pt-4">
          <img src="../../../../assets/vue.svg" alt="logo" />
        </div>
        <!--菜单-->
        <NavMenu class="flex-1"></NavMenu>
        <div @click="collapsed = !collapsed">折叠</div>
      </n-layout-sider>
      <n-layout-content content-style="height:100vh">
        <div class="m-l-24px h-full overflow-auto">
          <router-view></router-view>
        </div>
      </n-layout-content>
    </n-layout>
  </main>
</template>
