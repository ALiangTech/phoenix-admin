<script setup lang="ts">
defineOptions({
  name: 'GradientLine',
});
</script>

<template>
  <div class="h-1px gradient-color"></div>
</template>

<style scoped>
.gradient-color {
  background: linear-gradient(
    90deg,
    rgb(173 59 255 / 6.04%) 10%,
    rgb(205 61 245 / 100%) 31%,
    rgb(255 141 26 / 100%) 56%,
    rgb(167 255 79 / 19.2%) 92%
  );
  width: 100%;
}
</style>
