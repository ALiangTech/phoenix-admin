<template>
  <svg width="100%" height="100%">
    <text
      text-anchor="middle"
      x="50%"
      y="50%"
      class="text-15 fill-none stroke-emerald stroke-width-2px text-strokey-dasharray"
    >
      ADMIN-NAIVE
    </text>
    <text
      text-anchor="middle"
      x="50%"
      y="50%"
      class="text-15 fill-none stroke-blue stroke-width-2px text-strokey-dasharray animate-delay-4s"
    >
      ADMIN-NAIVE
    </text>
    <text
      text-anchor="middle"
      x="50%"
      y="50%"
      class="text-15 fill-none stroke-red stroke-width-2px text-strokey-dasharray animate-delay-3s"
    >
      ADMIN-NAIVE
    </text>
    <text text-anchor="middle" x="50%" y="60%" class="stroke-black">
      ADMIN-NAIVE
    </text>
  </svg>
</template>
<script setup lang="ts">
defineOptions({
  name: 'LoginLogo',
});
</script>
<style scoped>
.text-strokey-dasharray {
  stroke-dasharray: 100 400;
  animation-name: stroke;
  animation-duration: 5s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: -600;
  }
}
</style>
