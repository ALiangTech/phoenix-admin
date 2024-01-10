<template>
  <section>
    <div>
      <h6>整体外观</h6>
      <div class="flex gap-4">
        <div>
          <div
            class="w-15 h-15 system border-1 border-solid p-2 cursor-pointer"
          ></div>
          <span>跟随系统</span>
        </div>
        <div>
          <input type="radio" name="baseThemeOptions" />
          <span>浅色</span>
        </div>
        <div>
          <input type="radio" name="baseThemeOptions" />
          <span>深色</span>
        </div>
      </div>
    </div>
    <h6>主题</h6>
  </section>
</template>
<script setup lang="ts">
defineOptions({
  name: 'SettingAdvanced',
});
// 整体外观
</script>
<style scoped>
.system {
  background: linear-gradient(45deg, #1b1b1b 50%, #ededed 50%);
}
</style>
