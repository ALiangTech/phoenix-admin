<script setup lang="ts">
import RouterTransition from './transition.vue';
defineOptions({
  name: 'RootRouterView',
});
</script>
<template>
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
