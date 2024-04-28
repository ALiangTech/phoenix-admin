<template>
  <!--    <img :src="LogoSrc" alt="logo图片" class="w-100% h-48px object-contain" />-->
  <nav class="pt-16px">
    <n-menu
      v-model:value="activeKey"
      :collapsed-icon-size="22"
      :collapsed-width="64"
      :options="options"
      responsive
    />
  </nav>
</template>

<script lang="ts" setup>
import type { MenuComponent } from './menu';
import type { MenuOption } from 'naive-ui';
import { RouterLink } from 'vue-router';
import { computed, h, ref } from 'vue';
const props = defineProps<MenuComponent.Props>();
defineOptions({
  name: 'DesktopMenu',
});
const activeKey = ref(window.location.pathname);

function renderIcon(name: string) {
  return () => h('iconpark-icon', { name });
}
// 构建菜单的options 如果没有children 说明到了最后一级需要执行导航
// label 就要替换成link 函数
// todo 先改成any 提交一波代码
function createMenuOptions(menu: any[]): MenuOption[] {
  return menu.map(item => {
    const children = item.children;
    const temp: MenuOption = {
      label: () =>
        h(
          RouterLink,
          {
            to: {
              path: item.path,
            },
          },
          { default: () => item.label },
        ),
      key: item.path,
      icon: renderIcon(item.icon),
    };
    if (children.length > 1) {
      temp.label = item.label;
      temp.children = createMenuOptions(item.children);
    }
    return temp;
  });
}

const options = computed(() => {
  return createMenuOptions(props.menuList);
});
console.log(options, '-options-');
</script>
