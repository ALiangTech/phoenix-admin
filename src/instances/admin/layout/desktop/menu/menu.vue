<template>
  <nav>
    <n-menu
      v-model:value="activeKey"
      :collapsed-icon-size="22"
      :collapsed-width="64"
      :options="options"
      :indent="12"
      responsive
    />
  </nav>
</template>

<script lang="ts">
import type { MenuOption } from 'naive-ui';
import { RouterLink } from 'vue-router';
import { h, ref, defineComponent } from 'vue';
import { useMenuData } from '@/hooks';
import type { Menu } from '@/plugins';

function renderIcon(name: string) {
  // <svg class="iconpark-icon"><use href="#chart-graph"></use></svg>
  return () =>
    h('svg', { class: 'iconpark-icon' }, [h('use', { href: `#${name}` })]);
}

// 构建菜单的options 如果没有children 说明到了最后一级需要执行导航 就是点击需要页面跳转
// 所以label 就要替换成link 函数
function createMenuOptions(menu: Menu[]): MenuOption[] {
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

export default defineComponent({
  name: 'DesktopMenu',
  setup() {
    const data = useMenuData();
    const activeKey = ref(window.location.pathname);
    const options = createMenuOptions(data);
    return {
      activeKey,
      options,
    };
  },
});
</script>
