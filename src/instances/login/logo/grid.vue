<template>
  <div class="absoluteCenter h-full w-full flex justify-center items-center">
    <div class="h-50% w-50% overflow-hidden rotate-135 c-shape">
      <div class="bg-grid h-full w-full rotate--135"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'BgGrid',
});
</script>

<style scoped>
.bg-grid {
  background-color: transparent; /* 背景填充为黑色 */
  background-image:
    linear-gradient(90deg, purple 1px, transparent 1px),
    /* 垂直线条 */ linear-gradient(purple 1px, transparent 1px); /* 水平线条 */

  background-size: 42px 42px; /* 格子大小 */
}

.c-shape {
  clip-path: ellipse(50% 40% at 50% 50%);
  opacity: 0.6;
}
</style>
