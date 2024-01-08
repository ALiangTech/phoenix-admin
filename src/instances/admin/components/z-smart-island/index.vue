<script setup lang="ts">
import { useThemeVars } from 'naive-ui';
const emit = defineEmits<(e: 'change', type: string) => void>();
defineOptions({
  name: 'ZSmartIsland',
});
function setTheme() {
  emit('change', 'set-theme');
}
const themeVars = useThemeVars();
</script>

<template>
  <Teleport to="body">
    {{ themeVars }}
    <section class="absolute top-1 z-1 left-50% translate-x--50%">
      <div class="w-20vw">
        <div class="flex items-center justify-between">
          <n-avatar
            round
            size="small"
            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          />
          <span>HAN</span>
        </div>
        <div>
          <ZSwitchTheme @change="setTheme">ss</ZSwitchTheme>
        </div>
      </div>
    </section>
  </Teleport>
</template>
