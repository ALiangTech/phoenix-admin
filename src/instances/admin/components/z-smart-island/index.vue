<script setup lang="ts">
import { useThemeVars } from 'naive-ui';
import { computed, unref, ref } from 'vue';
import { gsap } from 'gsap/gsap-core';
const emit = defineEmits<(e: 'change', type: string) => void>();
defineOptions({
  name: 'ZSmartIsland',
});
function setTheme() {
  emit('change', 'set-theme');
}
const themeVars = useThemeVars();
const themeStyle = computed(() => {
  const { primaryColor, textColor1 } = unref(themeVars);
  return {
    color: textColor1,
    backgroundColor: primaryColor,
  };
});

const expandRef = ref<gsap.TweenTarget>(null);
const DefaultExpandHeight = 200;
const expandHeight = ref(DefaultExpandHeight);
// 点击展开
function toggleExpand() {
  const expandDom = unref(expandRef);
  const height = unref(expandHeight) ? 0 : DefaultExpandHeight;
  gsap.to(expandDom, { height, duration: 0.4 });
  expandHeight.value = height;
}
</script>

<template>
  <Teleport to="body">
    <section
      class="absolute top-1 z-1 left-50% translate-x--50% border-rounded-2"
      :style="themeStyle"
    >
      <div class="w-20vw h-3em flex items-center" @click="toggleExpand">
        <div class="flex flex-1 items-center justify-between border px-2">
          <n-avatar
            round
            size="small"
            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          />
          <span>HAN</span>
        </div>
      </div>
      <div ref="expandRef" class="overflow-hidden relative">
        <div class="absolute">
          <ZSwitchTheme @change="setTheme">ss</ZSwitchTheme>
        </div>
      </div>
    </section>
  </Teleport>
</template>
