<template>
  <section class="login-bg h-full w-full">
    <slot></slot>
  </section>
</template>
<script setup lang="ts">
defineOptions({
  name: 'LoginBackground',
});
</script>
<style scoped>
.login-bg {
  background-image: url('@/assets/png/login.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>
