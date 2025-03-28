<script setup lang="ts">
defineOptions({
  name: 'LayoutCollapseMenu',
});
const collapsed = defineModel();
</script>
<template>
  <n-el tag="section" class="flex justify-center items-center">
    <div
      :class="['menu',collapsed ? 'collapsed' : 'no-collapsed']"
      @click="collapsed = !collapsed"
    >
      <div class="bar arrow-top"></div>
      <div class="bar arrow-middle"></div>
      <div class="bar arrow-bottom"></div>
    </div>
  </n-el>
</template>
<style scoped>
.menu {
  transition: all 0.7s ease;
  width: 62px;
  cursor: pointer;
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
  background: var(--primary-color);
  width: 8px;
  transform: var(--top-transform);
}

.menu:hover .arrow-middle {
  background: var(--primary-color);
  transform: var(--middle-transform);
}

.menu:hover .arrow-bottom {
  background: var(--primary-color);
  transform: var(--bottom-transform);
  width: 8px;
}
</style>