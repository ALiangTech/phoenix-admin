<template>
  <div class="grid place-content-center bg-grid mask">
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
    linear-gradient(90deg, #6d086d 1px, transparent 1px),
    /* 垂直线条 */ linear-gradient(#6d086d 1px, transparent 1px);
  background-size:
    40px 40px,
    40px 40px;
  background-repeat: repeat;
  background-position: center;
}

.c-shape {
  clip-path: ellipse(50% 40% at 50% 50%);
}

.mask::before {
  display: block;
  position: absolute;
  content: '';
  height: 100%;
  width: 100%;
  background-image: linear-gradient(
      90deg,
      rgb(173 59 255 / 6.04%) 10%,
      rgb(205 61 245 / 100%) 31%,
      rgb(255 141 26 / 100%) 56%,
      rgb(167 255 79 / 19.2%) 92%
    ),
    linear-gradient(
      180deg,
      rgb(173 59 255 / 6.04%) 10%,
      rgb(205 61 245 / 100%) 31%,
      rgb(255 141 26 / 100%) 56%,
      rgb(167 255 79 / 19.2%) 92%
    ),
    linear-gradient(
      135deg,
      rgb(19 12 26 / 100%) 16%,
      rgb(75 0 130 / 80%) 40%,
      rgb(19 12 26 / 100%) 70%
    ); /* 水平线条 */

  background-size:
    70% 1px,
    1px 100%,
    100% 100%;
  background-repeat: no-repeat;
  background-position:
    left center,
    35% center,
    center;
}
</style>
