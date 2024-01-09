<template>
  <section class="pt-16px">
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
  </section>
</template>

<script lang="ts" setup>
import type { MenuComponent } from './menu';
import { RouterLink } from 'vue-router';
import { computed, h, ref } from 'vue';
const props = defineProps<MenuComponent.Props>();
defineOptions({
  name: 'DesktopMenu',
});
const activeKey = ref();

function renderIcon(name: string) {
  return () => h('iconpark-icon', { name });
}

function createMenuOptions(menu: any[]) {
  return menu.map(item => {
    return {
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
  });
}

const options = computed(() => {
  return createMenuOptions(props.menuList);
});
</script>
