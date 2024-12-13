<template>
  <div
    class="h-500px w-720px flex b-1 b-solid b-[rgba(153,153,153,0.28)] b-rounded-0.25rem p-0.5rem"
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
