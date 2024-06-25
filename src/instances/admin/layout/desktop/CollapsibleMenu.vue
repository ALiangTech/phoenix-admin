<script setup lang="ts">
import { useThemeVars } from 'naive-ui';

defineOptions({
  name: 'CollapsibleMenu',
});
const collapsed = defineModel();
const themeVars = useThemeVars();
</script>

<template>
  <div class="flex justify-center items-center">
    <div
      :class="[
        'menu',
        collapsed ? 'collapsed' : 'no-collapsed',
        'cursor-pointer',
      ]"
      @click="collapsed = !collapsed"
    >
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
  --top-transform: rotateZ(45deg) translate(6px, 0px);
  --bottom-transform: rotateZ(-45deg) translate(6px, 0px);
  --middle-transform: translateX(-3px);
}

.bar {
  display: block;
  height: 2px;
  width: 20px;
  background: var(--primary-color);
  margin: 4px auto;
  transition: all 0.7s ease;
}

.menu:hover .arrow-top {
  background: var(--yellow);
  width: 8px;
  transform: var(--top-transform);
}

.menu:hover .arrow-middle {
  background: var(--yellow);
  transform: var(--middle-transform);
}

.menu:hover .arrow-bottom {
  background: var(--yellow);
  transform: var(--bottom-transform);
  width: 8px;
}
</style>
