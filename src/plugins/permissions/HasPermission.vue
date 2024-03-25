<template>
  <slot v-if="can"></slot>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
interface Props {
  permissionCodeSet: Set<string>;
  code: string;
}
const props = defineProps<Props>();
const can = computed(() => {
  return window.$can(props.code);
});
</script>
