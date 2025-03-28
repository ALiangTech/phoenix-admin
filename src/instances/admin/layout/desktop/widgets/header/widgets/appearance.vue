<template>
  <section class="text-4 p-4">
    <div>
      <n-h6>整体外观</n-h6>
      <div class="flex flex-wrap gap-4 text-center">
        <template v-for="item of appearanceOptions" :key="item.value">
          <div
            class="cursor-pointer"
            @click="selectAppearance(item.value)"
          >
            <div class="w-20 h-15" :style="{ background: item.color }"></div>
            <p>{{ item.label }}</p>
          </div>
        </template>
      </div>
    </div>
    <div>
      <n-h6>主题</n-h6>
      <div class="flex flex-wrap gap-4 text-center">
        <template v-for="item of themeOptions" :key="item.value">
          <div
            class="cursor-pointer"
            @click="selectTheme(item.value)"
          >
            <div
              class="w-20 h-15"
              :style="{ backgroundColor: item.color }"
            ></div>
            <p>{{ item.label }}</p>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { useThemeStore, appearanceOptions, themeOptions } from '@/theme';
import type { AppearanceType, ThemeType } from '@/theme/type.ts';
defineOptions({
  name: 'Appearance',
});
const themeStore = useThemeStore();
// 整体外观
function selectAppearance(value: AppearanceType) {
  themeStore.handleSwitchProjectAppearance(value);
}
// 主题
function selectTheme(value: ThemeType) {
  themeStore.handleSwitchThemeType(value);
}
</script>
