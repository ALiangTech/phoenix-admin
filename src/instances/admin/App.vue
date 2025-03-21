<script setup lang="ts">
import { useLayoutType } from '@admin/layout';
import { themeContainer } from '@/theme';

defineOptions({
  name: 'APP',
});
const { currentLayout } = useLayoutType();
</script>
<template>
  <themeContainer>
    <component :is="currentLayout"></component>
  </themeContainer>
</template>
