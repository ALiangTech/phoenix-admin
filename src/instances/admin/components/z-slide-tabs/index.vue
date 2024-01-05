<template>
  <section
    v-element-size="onResize"
    class="relative p-2 flex flex-col gap-2 items-center justify-center h-100%"
  >
    <div ref="gbg" class="absolute top-0 h-1.5em rounded-6px"></div>
    <div
      v-for="item of list"
      :key="item.value"
      ref="doms"
      class="text-title cursor-pointer z-2 px-1 w-100% text-center"
      @click="handerClick(item.value)"
    >
      <span>{{ item.label }}</span>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { gsap } from 'gsap';
import { nextTick, ref, watchEffect } from 'vue';
import { vElementSize } from '@vueuse/components';

const props = withDefaults(defineProps<Props>(), {
  list: () => [
    { label: '用用户', value: 'accounts' },
    { label: '角角色色', value: 'roles' },
  ],
});
const emits = defineEmits(['update:modelValue', 'change']);
defineOptions({
  name: 'ZSlideTabs',
});

interface ListItem {
  label: string;
  value: number | string;
}

interface Props {
  list: ListItem[];
  modelValue: number | string;
}

// 设置当前选中的值
function handerClick(value: string | number) {
  emits('update:modelValue', value);
  emits('change', value);
}

const gbg = ref();

function handerClickAnimation(e: { target: HTMLElement }) {
  const { target } = e;
  const { offsetTop, offsetWidth } = target;
  gsap.to(gbg.value, { y: offsetTop, width: offsetWidth, duration: 0.3 });
}

// 根据modelValue 值来高亮

const doms = ref<HTMLElement[]>([]);

watchEffect(() => {
  const index = findCurrentElementIndex();
  nextTick(() => {
    if (doms.value) {
      const target = doms.value[index];
      handerClickAnimation({ target });
    }
  });
});

// 当前元素 dom 尺寸发生变化 背景也应该变化 不然 位置会错位
function onResize() {
  const index = findCurrentElementIndex();
  const target = doms.value[index];
  target && handerClickAnimation({ target });
}

// 根据modelValue 找到当前元素下标

function findCurrentElementIndex() {
  const modelValue = props.modelValue;
  const index = props.list.findIndex(item => item.value === modelValue);
  return index;
}
</script>
