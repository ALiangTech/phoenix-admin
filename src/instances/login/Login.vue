<template>
  <themeContainer>
      <LoginBackground class="h-full grid grid-rows-[auto_1fr] grid-cols-[100%]">
          <header class="px-4 text-center xl:text-left">
            <n-h1 class="mb-0">凤凰平台</n-h1>
          </header>
          <LoginCard>
            <LoginNews  />
            <LoginForm  />
        </LoginCard>
      </LoginBackground>
  </themeContainer>
</template>
<script setup lang="ts">
import LoginBackground from './modules/background/bg.vue';
import LoginForm from './modules/form/form.vue';
import LoginNews from './modules/news/news.vue';
import LoginCard from './modules/card/card.vue';
import { themeContainer } from '@/theme';

defineOptions({
  name: 'LoginApp',
});
</script>
