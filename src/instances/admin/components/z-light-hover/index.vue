<script setup lang="ts">
interface Props {
  checked: boolean;
}
const props = defineProps<Props>();
defineOptions({
  name: 'ZLightHover',
});
</script>

<template>
  <section
    :class="[
      'cursor-pointer border-1 border-solid border-#ccc border-rounded-1 p-2 cursor-pointer',
      props.checked ? 'checked' : 'hover:border-red',
    ]"
  >
    <slot></slot>
  </section>
</template>

<style scoped>
/** 选中 */

.checked {
  box-shadow: inset 0 0 0 3px #0078d4;
}
</style>
