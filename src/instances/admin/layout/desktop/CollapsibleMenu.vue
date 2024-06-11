<script setup lang="ts">
import { useThemeVars } from 'naive-ui';
defineOptions({
  name: 'CollapsibleMenu',
});
const collapsed = defineModel();
const themeVars = useThemeVars();
</script>

<template>
  <div class="flex justify-end" @click="collapsed = !collapsed">
    <div :class="['menu', collapsed ? 'collapsed' : 'no-collapsed']">
      <div class="bar arrow-top"></div>
      <div class="bar arrow-middle"></div>
      <div class="bar arrow-bottom"></div>
    </div>
  </div>
</template>

<style scoped>
.menu {
  --yellow: v-bind('themeVars.primaryColor');
  --primary-color: v-bind('themeVars.primaryColor');

  transition: all 0.7s ease;
  width: 62px;
}

.no-collapsed {
  --top-transform: rotateZ(-45deg) translateY(6px);
  --bottom-transform: rotateZ(45deg) translateY(-6px);
  --middle-transform: translateX(12px);
}

.collapsed {
  --top-transform: rotateZ(45deg) translateY(6px);
  --bottom-transform: rotateZ(-45deg) translateY(-6px);
  --middle-transform: translateX(-12px);
}

.bar {
  display: block;
  height: 3px;
  width: 26px;
  background: var(--primary-color);
  margin: 6px auto;
  transition: all 0.7s ease;
}

.menu:hover .arrow-top {
  background: var(--yellow);
  width: 12px;
  transform: var(--top-transform);
}

.menu:hover .arrow-middle {
  background: var(--yellow);
  transform: var(--middle-transform);
}

.menu:hover .arrow-bottom {
  background: var(--yellow);
  transform: var(--bottom-transform);
  width: 12px;
}
</style>
