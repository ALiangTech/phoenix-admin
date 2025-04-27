<template>
  <themeContainer>
      <LoginBackground class="h-full grid grid-rows-[auto_1fr]">
          <header class="px-4">
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
