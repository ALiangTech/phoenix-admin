<template>
  <section class="flexCenter xl:flex flex-1 hidden">
    <component :is="LoginNewsText" />
  </section>
</template>
<script setup lang="ts">
import LoginNewsText from './text.vue';
defineOptions({
  name: 'LoginNews',
});
</script>
