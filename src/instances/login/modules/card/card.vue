<template>
  <div class="flexCenter">
      <div
        style="box-shadow:1px 1px 9px 3px #f0e7e770"
        class="flex w-40% min-w-300px min-h-460px xl:w-800px h-40% bg-white b-rounded-0.5rem overflow-hidden">
        <slot></slot>
      </div>
  </div>
</template>
<script setup lang="ts">
defineOptions({
  name: 'LoginCard',
});
</script>
