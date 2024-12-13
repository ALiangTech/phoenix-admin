<template>
  <section class="hidden flexCenter xl:flex">
    <component :is="LoginNewsText" />
  </section>
</template>
<script setup lang="ts">
import LoginNewsText from './text.vue';
defineOptions({
  name: 'LoginNews',
});
</script>
