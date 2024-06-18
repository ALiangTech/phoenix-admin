<template>
  <ThemeConfig>
    <main class="h-screen w-screen relative grid ani-bg">
      <div class="flex-1 relative">
        <Logo></Logo>
        <BgGrid></BgGrid>
        <GradientLine class="absolute top-50%"></GradientLine>
        <GradientLine class="absolute top-50% rotate-90"></GradientLine>
      </div>
      <section
        class="flex justify-center items-center rounded-10px p-1.5 text-nowrap"
      >
        <div class="w-50% rounded-10px flex flex-col">
          <div class="pb-2 text-#aa54ff">
            <h2 class="m0 text-#aa54ff">LOG IN TO THE SYSTEM</h2>
            <span>欢迎来到x-admin平台</span>
          </div>
          <LoginForm></LoginForm>
          <div class="flex-1 flex flex-col flex-justify-end pb-4">
            <div>
              <n-button text>没有账号?注册一个吧</n-button>
            </div>
          </div>
        </div>
      </section>
    </main>
  </ThemeConfig>
</template>
<script setup lang="ts">
import { createThemeConfigProvider, switchTheme } from '@/theme';
import LoginForm from './form.vue';
import GradientLine from '@login/logo/gradient-line.vue';
import BgGrid from '@login/logo/grid.vue';
import Logo from '@login/logo/logo.vue';

const ThemeConfig = createThemeConfigProvider();
switchTheme('purple');
defineOptions({
  name: 'LoginApp',
});
</script>

<style scoped>
.ani-bg {
  --linear-gradient-direction: #130c1a;

  background: var(--linear-gradient-direction);
  grid-template-columns: 2fr 1fr;
}
</style>
