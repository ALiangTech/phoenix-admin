<template>
  <n-loading-bar-provider>
    <NConfigProvider :theme="darkTheme" abstract>
      <router-view></router-view>
    </NConfigProvider>
  </n-loading-bar-provider>
</template>
<script setup lang="ts">
import { darkTheme } from 'naive-ui';
</script>
