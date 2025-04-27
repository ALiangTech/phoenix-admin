<template>
  <div class="flex flexCenter mx-auto">
      <div class="flex w-50% min-w-360px min-h-460px xl:w-800px h-40% bg-white b-rounded-0.5rem overflow-hidden">
        <slot></slot>
      </div>
  </div>
</template>
<script setup lang="ts">
defineOptions({
  name: 'LoginCard',
});
</script>
