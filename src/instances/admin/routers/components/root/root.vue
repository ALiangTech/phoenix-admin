<template>
  <Layout>
    <template #content>
      <router-view v-slot="{ Component }">
        <RouterTransition>
          <component :is="Component" />
        </RouterTransition>
      </router-view>
    </template>
    <template #menu>
      <Menu :menu-list="menu"></Menu>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import Menu from '@admin/routers/components/menu/menu.vue';
import Layout from './layout.vue';
import RouterTransition from './transition.vue';
import { menu } from '@admin/routers';
defineOptions({
  name: 'RootPage',
});
</script>
