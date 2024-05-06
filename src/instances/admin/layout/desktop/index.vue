<script lang="ts">
import NavMenu from './menu/menu.vue';
import Setting from './setting/AvatarWithSettings.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DesktopLayoutEntry',
  components: { NavMenu, Setting },
  setup() {
    return {};
  },
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
          <!-- logo -->
          <div class="flex justify-center items-center pt-4">
            <img src="../../../../assets/vue.svg" alt="logo" />
          </div>
          <!--菜单-->
          <NavMenu class="flex-1"></NavMenu>
          <!--头像/设置中心-->
          <Setting></Setting>
        </section>
      </n-layout-sider>
      <n-layout-content content-style="height:100vh">
        <div class="m-l-24px">
          <router-view></router-view>
        </div>
      </n-layout-content>
    </n-layout>
  </main>
</template>
