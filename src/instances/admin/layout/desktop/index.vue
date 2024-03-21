<script setup lang="ts">
import NavMenu from './menu/menu.vue';
import { menu } from '@admin/routers';
import Setting from './setting/AvatarWithSettings.vue';
import HasPermission from '@/plugins/permissions/HasPermission.vue';

defineOptions({
  name: 'DefaultDesktopLayout',
});
</script>

<template>
  <main class="h-screen">
    <div>xxx</div>
    <has-permission action="post" object="/account_add">
      <div>kkk</div>
    </has-permission>
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
        <router-view></router-view>
      </n-layout-content>
    </n-layout>
  </main>
</template>
