<template>
  <section class="h-full flex justify-between items-center gap-2 p-x-2">
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
import { h, ref, unref } from 'vue';
import { useLogout } from '@admin/hooks';
import Profile from './setting/index.vue';
import type { DropdownOption } from 'naive-ui';

type Keys = 'profile' | 'logout';
type OptionItem = DropdownOption & { key: Keys; onClick: () => void };

defineOptions({
  name: 'LayoutHeader',
});

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
