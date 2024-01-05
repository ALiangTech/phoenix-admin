<template>
  <NConfigProvider :theme="darkTheme" abstract>
    <router-view></router-view>
  </NConfigProvider>
</template>
<script setup lang="ts">
import { darkTheme } from 'naive-ui';
</script>
