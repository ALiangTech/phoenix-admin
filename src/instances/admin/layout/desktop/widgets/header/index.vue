<template>
  <section
    class="flex justify-between h-48px"
    :style="{
       transition: '.3s var(--cubic-bezier-ease-in-out)',
       ...style,
      }"
  >
    <div class="flex">
      <div class="flex items-center gap-4px p-l-12px">
        <img
          src="@admin/assets/logo.svg"
          class="bg-custom"
          alt="logo"
          title="logo"
        />
        <h1 class="m-0 text-4">{{appInfo.title}}</h1>
      </div>
      <LayoutCollapseMenu v-model="collapsed"></LayoutCollapseMenu>
    </div>
    <div>
      <section class="h-full flex justify-between items-center gap-2 p-x-2">
        <!--姓名/头像-->
        <n-dropdown
          trigger="hover"
          show-arrow
          :options="options"
          @select="onSelect"
        >
          <div class="flex items-center gap-2">
            <span>{{ userInfo.name }}</span>
            <n-avatar size="small" :src="userInfo.avatar" />
          </div>
        </n-dropdown>
      </section>
      <!--弹窗-->
      <n-modal v-model:show="showModal" preset="dialog" class="w-50vw!" :show-icon="false">
        <section class="w-full h-60vh overflow-hidden grid grid-rows-[auto_1fr]">
          <n-h3 style="text-align: center">
            管理中心
          </n-h3>
          <n-tabs type="segment" animated class="grid grid-rows-[auto_1fr] overflow-hidden">
            <n-tab-pane name="chap1" tab="个人中心">
              个人信息
            </n-tab-pane>
            <n-tab-pane name="chap2" tab="主题配置" class="h-full">
              <n-scrollbar>
                <Appearance></Appearance>
              </n-scrollbar>
            </n-tab-pane>
            <n-tab-pane name="chap3" tab="高级设置">
              高级设置
            </n-tab-pane>
          </n-tabs>
        </section>
      </n-modal>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, unref } from 'vue';
import { useLogout } from '@admin/hooks';
import { Appearance } from './widgets'
import type { DropdownOption} from 'naive-ui';
import { useThemeVars } from 'naive-ui';
import { renderIcon } from '@admin/layout/utils';
import { LayoutCollapseMenu } from '@admin/layout/desktop/widgets';
defineOptions({
  name: 'LayoutHeader',
});

const themeVars = useThemeVars();
const style = computed(() => {
  return {
    backgroundColor: themeVars.value.tableColor,
    color: themeVars.value.textColor2,
  };
});
const collapsed = defineModel();

// 系统基础信息logo title
function withAppConfig() {
  const appInfo = ref({
    title: '天上科技',
    logo: '@admin/assets/logo.svg',
  })
  return {
    appInfo,
  }
}
const { appInfo } = withAppConfig();

// 登录信息
function withUserConfig() {
  const userInfo = ref({
    name: '李大哈',
    avatar: 'https://picsum.photos/id/1/100/100',
  })
  return {
    userInfo,
  }
}
const { userInfo } = withUserConfig();

// 弹窗
const showModal = ref(false);
function openProfileDialog() {
  showModal.value = !unref(showModal);
}

// 下拉操作
type Keys = 'profile' | 'logout';
type OptionItem = DropdownOption & { key: Keys; onClick: () => void };
const { logout } = useLogout();
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
function onSelect(key: Keys) {
  const optionItem = options.find(item => item.key === key)!;
  optionItem.onClick();
}
</script>
