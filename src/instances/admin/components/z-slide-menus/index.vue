<template>
  <section class="h-100% flex w-100%">
    <div class="w-160px mx-auto">
      <ZSliceTabs
        v-model="currentRouteName"
        :list="menus as any[]"
        @change="handleRouter"
      ></ZSliceTabs>
    </div>
    <div class="flex-1">
      <router-view></router-view>
    </div>
  </section>
</template>

<script lang="ts" setup>
import ZSliceTabs from '@admin/components/z-slide-tabs/index.vue';
import useFirstRouter from '@admin/hooks/useFirstRoute';
import { ref } from 'vue';

const props = defineProps<Props>();
defineOptions({
  name: 'ZSlideMenus',
});

interface Props {
  routeName: string;
}

// eslint-disable-next-line vue/no-setup-props-destructure
const { routeName } = props;
const { getMenus, router, route } = useFirstRouter({ routeName });

function handleRouter() {
  router.push({ name: currentRouteName.value });
}

let menus = getMenus();
// 转换一个数据字段 routeName => value
menus = menus.map(item => {
  const { routeName: value } = item;
  return { ...item, value };
});

// 如果从route 上面获取的name 不在menus 里面 则 取menus里面的一个作为 currentRouteName的初始化值 否则 取值name

function getCurentRouteNameInitValue() {
  const { name } = route;
  if (menus.find(item => item.routeName === name)) {
    return name as string;
  } else {
    return menus[0].routeName as string;
  }
}

const init = getCurentRouteNameInitValue();
const currentRouteName = ref<string>(init);

router.push({ name: init }); // 默认跳转路由
</script>
