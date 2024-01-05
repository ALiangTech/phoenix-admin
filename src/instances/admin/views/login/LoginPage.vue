<template>
  <main class="h-screen w-screen relative bg-black">
    <section
      class="absoluteCenter w-70% h-md bg-light min-w-600px max-w-800px flex justify-between rounded-10px p-1.5"
    >
      <div class="flex-1">
        <LoginLogo></LoginLogo>
      </div>
      <div class="w-40% h-full bg-white text-center rounded-10px flex flex-col">
        <div class="pt-8 pb-5">
          <span class="i-typcn-anchor w-2rem h-2rem inline-block"></span>
        </div>
        <div class="pb-2">
          <h2 class="m0">欢迎回来!</h2>
          <span>请输入账号和密码</span>
        </div>
        <LoginForm></LoginForm>
        <div class="flex-1 flex flex-col flex-justify-end pb-4">
          <div><n-button text>没有账号?注册一个吧</n-button></div>
        </div>
      </div>
    </section>
  </main>
</template>
<script setup lang="ts">
import LoginForm from './form.vue';
import LoginLogo from './logo.vue';
defineOptions({
  name: 'LoginApp',
});
</script>
