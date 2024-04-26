<template>
  <section>
    <n-menu
      v-model:value="activeKey"
      mode="horizontal"
      :options="options"
      responsive
    />
  </section>
</template>

<script lang="ts">
import { defineComponent, h } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
export default defineComponent({
  name: 'ZTopMenu',
  setup() {
    const { matched } = useRoute();
    const [, route] = matched; // 获取二级路由数据
    const { children } = route; // 获取三级路由数据
    const options = children.map(item => {
      return {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                path: item.path,
              },
            },
            { default: () => item.meta?.menu?.label },
          ),
        key: 'item.path',
      };
    });
    return {
      options,
      activeKey: '',
    };
  },
});
</script>
