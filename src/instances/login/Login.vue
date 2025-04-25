<template>
  <themeContainer>
    <main class="grid h-full w-full">
      <LoginBackground>
        <section class="relative h-full grid grid-rows-[auto_1fr] z-10">
          <header class="px-1rem">
            <n-h1>凤凰平台</n-h1>
          </header>
          <div class="flexCenter ">
            <LoginCard class="bg-white">
              <LoginNews  />
              <LoginForm  />
            </LoginCard>
          </div>
        </section>
      </LoginBackground>
    </main>
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
