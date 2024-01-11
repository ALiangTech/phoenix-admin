<template>
  <section class="text-4 p-4">
    <div>
      <h6 class="py-2 text-6">整体外观</h6>
      <div class="flex flex-wrap gap-4 text-center">
        <template v-for="item of appearances" :key="item.value">
          <ZLightHover
            :checked="activeAppearance === item.value"
            @click="selectAppearance(item.value)"
          >
            <div class="w-20 h-15" :style="{ background: item.color }"></div>
            <p>{{ item.label }}</p>
          </ZLightHover>
        </template>
      </div>
    </div>
    <div>
      <h6 class="py-2 text-6">主题</h6>
      <div class="flex flex-wrap gap-4 text-center">
        <template v-for="item of theme" :key="item.value">
          <ZLightHover
            :checked="activeTheme === item.value"
            @click="selectTheme(item.value)"
          >
            <div
              class="w-20 h-15"
              :style="{ backgroundColor: item.color }"
            ></div>
            <p>{{ item.label }}</p>
          </ZLightHover>
        </template>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue';
defineOptions({
  name: 'SettingAdvanced',
});
// 整体外观
const appearances = [
  {
    label: '跟随系统',
    value: 'system',
    color: 'linear-gradient(45deg, #1b1b1b 50%, #ededed 50%)',
  },
  {
    label: '浅色',
    value: 'tint',
    color: '#ededed',
  },
  {
    label: '深色',
    value: 'deep',
    color: '#1b1b1b',
  },
];
const activeAppearance = ref('system');
function selectAppearance(value: string) {
  activeAppearance.value = value;
}
// 主题
const theme = [
  {
    label: '薄暮',
    value: 'red',
    color: '#f5222d',
  },
  {
    label: '火山',
    value: 'volcano',
    color: '#fa541c',
  },
  {
    label: '日暮',
    value: 'orange',
    color: '#fa8c16',
  },
  {
    label: '金盏花',
    value: 'gold',
    color: '#faad14',
  },
  {
    label: '日出',
    value: 'yellow',
    color: '#fadb14',
  },
  {
    label: '青柠',
    value: 'lime',
    color: '#a0d911',
  },
  {
    label: '极光绿',
    value: 'green',
    color: '#52c41a',
  },
  {
    label: '明青',
    value: 'cyan',
    color: '#f0f5ff',
  },
  {
    label: '拂晓蓝',
    value: 'blue',
    color: '#1677ff',
  },
  {
    label: '极客蓝',
    value: 'geekblue',
    color: '#2f54eb',
  },
  {
    label: '酱紫',
    value: 'purple',
    color: '#722ed1',
  },
  {
    label: '法式洋红',
    value: 'magenta',
    color: '#eb2f96',
  },
];
const activeTheme = ref('red');
function selectTheme(value: string) {
  activeTheme.value = value;
}
</script>
