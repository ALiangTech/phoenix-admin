<template>
  <section class="h-full flex justify-between items-center gap-2 p-x-2">
    <!--面包屑-->
    <n-breadcrumb>
      <n-breadcrumb-item v-for="item of breadcrumbOptions" :key="item.label">
        <div class="flex items-center gap-1">
          <component :is="item.icon()"></component>
          <span>{{ item.label }}</span>
        </div>
      </n-breadcrumb-item>
    </n-breadcrumb>
    <!--姓名/头像-->
    <n-dropdown
      trigger="hover"
      show-arrow
      :options="options"
      @select="handleSelect"
    >
      <div class="flex items-center gap-2">
        <span>{{ name }}</span>
        <n-avatar size="small" :src="avatar" />
      </div>
    </n-dropdown>
  </section>
  <n-modal v-model:show="showModal" :mask-closable="false">
    <section class="w-50vw h-50vh">
      <Profile></Profile>
      <button @click="openProfileDialog">close</button>
    </section>
  </n-modal>
</template>

<script setup lang="ts">
import { h, ref, unref, watch } from 'vue';
import { useLogout } from '@admin/hooks';
import Profile from './setting/index.vue';
import { useRoute } from 'vue-router';
import type { DropdownOption } from 'naive-ui';

type Keys = 'profile' | 'logout';
type OptionItem = DropdownOption & { key: Keys; onClick: () => void };

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
const showModal = ref(false);

function openProfileDialog() {
  showModal.value = !unref(showModal);
}

const { logout } = useLogout();

// todo renderIcon 多个地方被使用 后续抽离出来
function renderIcon(name: string) {
  // <svg class="iconpark-icon"><use href="#chart-graph"></use></svg>
  return () =>
    h('svg', { class: 'iconpark-icon' }, [h('use', { href: `#${name}` })]);
}

const name = '李大哈';
const avatar = 'https://picsum.photos/id/1/100/100';

const options: Array<OptionItem> = [
  {
    label: '个人中心',
    key: 'profile',
    icon: renderIcon('people'),
    onClick: () => {
      openProfileDialog();
    },
  },
  {
    label: '退出',
    key: 'logout',
    icon: renderIcon('logout'),
    onClick: () => {
      logout();
    },
  },
];

function handleSelect(key: Keys) {
  const optionItem = options.find(item => item.key === key) as OptionItem; // 一定存在故 断言类型是OptionItem
  optionItem.onClick();
}
</script>
