<template>
  <ThemeConfig>
    <main class="grid h-full w-full">
      <LoginBackground>
        <section class="h-full grid grid-rows-[auto_1fr]">
          <header class="px-1rem">
            <h1>PHOENIX</h1>
          </header>
          <div class="flexCenter">
            <LoginCard>
              <LoginNews />
              <LoginForm />
            </LoginCard>
          </div>
        </section>
      </LoginBackground>
    </main>
  </ThemeConfig>
</template>
<script setup lang="ts">
import { createThemeConfigProvider } from '@/theme';
import LoginBackground from './modules/background/bg.vue';
import LoginForm from './modules/form/form.vue';
import LoginNews from './modules/news/news.vue';
import LoginCard from './modules/card/card.vue';
const ThemeConfig = createThemeConfigProvider();

defineOptions({
  name: 'LoginApp',
});
</script>
