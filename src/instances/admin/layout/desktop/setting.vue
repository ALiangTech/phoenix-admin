<script setup lang="ts">
import { ref, unref } from 'vue';
import Setting from './setting/index.vue';
const name = ref('HAN');
const showModal = ref(false);
function openSettingDialog() {
  showModal.value = !unref(showModal);
}
</script>

<template>
  <section class="py-1 bg-#ccc overflow-hidden text-nowrap text-0 relative">
    <n-avatar
      class="inline-block relative ml-15px mx-auto z-1"
      :style="{
        color: 'skyblue',
        backgroundColor: 'black',
      }"
      >{{ name }}</n-avatar
    >
    <div
      class="absolute top-50% translate-y--50% right-6 cursor-pointer"
      @click="openSettingDialog"
    >
      <svg class="w6 h6 ani-rotate">
        <use href="#setting-two"></use>
      </svg>
    </div>
  </section>
  <n-modal v-model:show="showModal" :mask-closable="false">
    <section class="w-50vw h-50vh">
      <Setting></Setting>
      <button @click="openSettingDialog">ss</button>
    </section>
  </n-modal>
</template>

<style scoped>
/** 设置icon动画 */
.ani-rotate {
  animation: rotate linear 8s infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
