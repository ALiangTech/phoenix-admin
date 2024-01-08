<!--<template>-->
<!--  <Layout>-->
<!--    <template #content>-->
<!--      <router-view v-slot="{ Component }">-->
<!--        <RouterTransition>-->
<!--          <component :is="Component" />-->
<!--        </RouterTransition>-->
<!--      </router-view>-->
<!--    </template>-->
<!--    <template #menu>-->
<!--      <Menu :menu-list="menu"></Menu>-->
<!--    </template>-->
<!--  </Layout>-->
<!--</template>-->

<!--<script setup lang="ts">-->
<!--import Menu from '@admin/routers/components/menu/menu.vue';-->
<!--import Layout from './layout.vue';-->
<!--import RouterTransition from './transition.vue';-->
<!--import { menu } from '@admin/routers';-->
<!--defineOptions({-->
<!--  name: 'RootPage',-->
<!--});-->
<!--</script>-->

<script setup lang="ts">
import type { componentsMapKey } from './../layout';
import { componentMap } from './../layout';
import { ref, unref } from 'vue';
import Menu from '@admin/routers/components/menu/menu.vue';
import RouterTransition from './transition.vue';
import { menu } from '@admin/routers';
defineOptions({
  name: 'RootPage',
});
const currentComponentMapKey = ref<componentsMapKey>('default-desktop');
const component = componentMap.get(unref(currentComponentMapKey));
</script>
<template>
  <component :is="component">
    <template #content>
      <router-view v-slot="{ Component }">
        <Suspense>
          <RouterTransition>
            <component :is="Component" />
          </RouterTransition>
          <!-- 加载中状态 -->
          <template #fallback> 正在加载... </template>
        </Suspense>
      </router-view>
    </template>
    <template #menu>
      <Menu :menu-list="menu"></Menu>
    </template>
  </component>
</template>
