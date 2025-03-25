<template>
  <n-button v-bind="attrsWithoutOn" :loading="loading" @click="onClickWrapper">
    <slot></slot>
  </n-button>
</template>
<script setup lang="ts">
import { useInert } from '@/hooks'
import type { Props } from './type';
const props = withDefaults(defineProps<Props>(), {
  disable: false,
})
defineOptions({
  name: 'XButton',
  inheritAttrs: false,
});
const attrs = useAttrs();
// 从attrs中获取非on开头的属性
const attrsWithoutOn = Object.keys(attrs).reduce((acc, key) => {
  if (!key.startsWith('on')) {
    acc[key] = attrs[key];
  }
  return acc;
}, {} as any);

const loading = ref(false);
const { inert, unInert} = useInert(document.documentElement, props.disable);
const onClickWrapper = async (e:Event) => {
  try {
    inert();
    loading.value = true;
    await attrs.onClick?.(e);
  } catch (error) {
    console.log(error);
  } finally {
    setTimeout(() => {
      loading.value = false;
      unInert();
    }, 500);
  }
};
</script>