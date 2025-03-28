<template>
  <!--面包屑-->
  <section class="h-42px py-6px flex items-center">
    <n-breadcrumb>
      <n-breadcrumb-item v-for="item of breadcrumbOptions" :key="item.label">
        <div class="flex items-center gap-1">
          <component :is="item.icon()"></component>
          <span>{{ item.label }}</span>
        </div>
      </n-breadcrumb-item>
    </n-breadcrumb>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { renderIcon } from '@admin/layout/utils';
import type { VNode } from 'vue';
interface BreadcrumbItem {
  label: string;
  icon: () => VNode;
}
defineOptions({
  name: 'LayoutBreadcrumb',
});
function useBreadcrumb() {
  // 面包屑相关的逻辑
  const route = useRoute();
  const breadcrumbOptions = ref<BreadcrumbItem[]>([]);
  // 监听路由变化
  watch(
    () => route.fullPath,
    () => {
      const { matched } = route;
      breadcrumbOptions.value = matched
        .map(item => {
          const menu = item.meta?.menu;
          if (menu) {
            return {
              label: menu.label,
              icon: renderIcon(menu.icon),
            };
          }
          return menu;
        })
        .filter(v => v) as BreadcrumbItem[];
    },
    {
      immediate: true, // 初始化执行一次，否则breadcrumbOptions 是个空数组
    },
  );
  return {
    breadcrumbOptions,
  };
}
const { breadcrumbOptions } = useBreadcrumb();
</script>
