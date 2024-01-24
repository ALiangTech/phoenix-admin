<template>
  <slot v-if="can"></slot>
</template>
<script lang="ts" setup>
import { ref, watchEffect } from 'vue';
interface Props {
  action: string;
  object: string;
}
const props = defineProps<Props>();
const can = ref(false);
watchEffect(() => {
  window.$authorizer.can(props.action, props.object).then(result => {
    can.value = result;
  });
});
</script>
