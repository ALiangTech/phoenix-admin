<template>
  <section>
    <ZSliceMenus :route-name="routeName"></ZSliceMenus>
  </section>
</template>

<script setup lang="ts">
import ZSliceMenus from '@admin/components/z-slide-menus/index.vue';
import { users } from './router';
const routeName = users.name as string;
</script>
