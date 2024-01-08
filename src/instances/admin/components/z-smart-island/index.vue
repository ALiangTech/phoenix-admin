<script setup lang="ts">
defineOptions({
  name: 'ZSmartIsland',
});
</script>

<template>
  <Teleport to="body">
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
      </div>
    </section>
  </Teleport>
</template>
