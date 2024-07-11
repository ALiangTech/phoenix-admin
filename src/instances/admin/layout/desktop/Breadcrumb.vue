<template>
  <!--面包屑-->
  <section class="h-54px flex items-center">
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
import { h, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

interface BreadcrumbItem {
  label: string;
  icon: () => JSX.Element;
}

defineOptions({
  name: 'LayoutHeader',
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

// todo renderIcon 多个地方被使用 后续抽离出来
function renderIcon(name: string) {
  // <svg class="iconpark-icon"><use href="#chart-graph"></use></svg>
  return () =>
    h('svg', { class: 'iconpark-icon' }, [h('use', { href: `#${name}` })]);
}
</script>
