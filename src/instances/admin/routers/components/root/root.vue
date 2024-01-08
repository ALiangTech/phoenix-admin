<script setup lang="ts">
import type { componentsMapKey } from './../layout';
import { componentMap } from './../layout';
import { ref, unref } from 'vue';
defineOptions({
  name: 'RootPage',
});
const currentComponentMapKey = ref<componentsMapKey>('default-desktop');
const component = componentMap.get(unref(currentComponentMapKey));
</script>
<template>
  <component :is="component" />
</template>
