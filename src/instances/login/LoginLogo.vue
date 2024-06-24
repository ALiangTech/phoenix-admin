<template>
  <GridBackground>
    <Logo />
  </GridBackground>
</template>

<script setup lang="ts">
import GridBackground from '@login/logoComponents/GridBackground.vue';
import Logo from '@login/logoComponents/logo.vue';

defineOptions({
  name: 'LoginLogo',
});
</script>
