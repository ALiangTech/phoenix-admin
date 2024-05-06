<template>
  <section>抱歉，您暂无权限访问此页面！</section>
  <button @click="gotoRootPage">gotoRootPage</button>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
const gotoRootPage = () => {
  router.push({ name: 'RootPage' });
};
</script>
