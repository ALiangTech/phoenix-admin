<template>
  <ZSliceMenus :route-name="routeName"></ZSliceMenus>
</template>

<script setup lang="ts">
import ZSliceMenus from '@admin/components/z-slide-menus/index.vue';
import { users } from './router';
const routeName = users.name as string;
import { useLoadingBar } from 'naive-ui';
const loadingBar = useLoadingBar();
loadingBar.start();
</script>
