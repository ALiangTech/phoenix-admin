<template>
  <div class="grid place-content-center bg-grid c-shape">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'GridBackground',
});
</script>

<style scoped>
.bg-grid {
  background-image:
    linear-gradient(90deg, purple 1px, transparent 1px),
    /* 垂直线条 */ linear-gradient(purple 1px, transparent 1px); /* 水平线条 */

  background-size: 40px 40px; /* 格子大小 */
}

.c-shape {
  clip-path: ellipse(50% 40% at 50% 50%);
  opacity: 0.5;
}
</style>
