<template>
  <ThemeConfig>
    <main class="h-screen w-screen login-layout">
      <LoginLogo></LoginLogo>
      <LoginForm></LoginForm>
    </main>
  </ThemeConfig>
</template>
<script setup lang="ts">
import { createThemeConfigProvider } from '@/theme';
import LoginForm from './LoginForm.vue';
import LoginLogo from './LoginLogo.vue';

const ThemeConfig = createThemeConfigProvider();

defineOptions({
  name: 'LoginApp',
});
</script>

<style scoped>
.login-layout {
  --linear-gradient-direction: #130c1a;

  display: grid;
  grid-template-columns: 7fr 3fr;
  background: var(--linear-gradient-direction);
}
</style>
