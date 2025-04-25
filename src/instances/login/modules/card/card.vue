<template>
  <div
    class="h-500px w-50% min-w-360px xl:w-800px flex b-rounded-0.5rem overflow-hidden"
  >
    <div class="w-full flex justify-around">
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
defineOptions({
  name: 'LoginCard',
});
</script>
