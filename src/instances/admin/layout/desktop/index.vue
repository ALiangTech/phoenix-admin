<script lang="ts">
import NavMenu from './menu/menu.vue';
import { menu } from '@admin/routers';
import Setting from './setting/AvatarWithSettings.vue';
import { defineComponent } from 'vue';
import Top from './top/index.vue';
export default defineComponent({
  name: 'DesktopLayoutEntry',
  components: { NavMenu, Setting, Top },
  setup() {
    return {
      menu,
    };
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
          <NavMenu class="flex-1" :menu-list="menu"></NavMenu>
          <!--头像/设置中心-->
          <Setting></Setting>
        </section>
      </n-layout-sider>
      <n-layout-content content-style="height:100vh">
        <div class="m-l-24px h-full grid custom-rows">
          <Top></Top>
          <div class="overflow-hidden">
            <router-view></router-view>
          </div>
        </div>
      </n-layout-content>
    </n-layout>
  </main>
</template>
<style scoped>
.custom-rows {
  grid-template-rows: 48px 1fr;
}
</style>
