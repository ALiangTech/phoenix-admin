<template>
  <div class="px-6 text-left">
    <n-form
      ref="formRef"
      :label-width="80"
      :model="formValue"
      :rules="rules"
      size="small"
    >
      <n-form-item label="姓名" path="user.name">
        <n-input v-model:value="formValue.user.name" placeholder="输入姓名" />
      </n-form-item>
      <n-form-item label="密码" path="user.age">
        <n-input
          v-model:value="formValue.user.age"
          autocomplete="current-password"
          placeholder="输入密码"
          type="password"
          show-password-on="click"
        />
      </n-form-item>
    </n-form>
    <div class="text-right">
      <span class="text-10px cursor-pointer">忘记密码?</span>
    </div>
    <div class="pt-4">
      <n-button block circle type="primary" @click="handleValidateClick">
        登录
      </n-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { FormInst } from 'naive-ui';

const formRef = ref<FormInst | null>(null);
const rules = {
  user: {
    name: {
      required: true,
      message: '请输入姓名',
      trigger: ['submit'],
    },
    age: {
      required: true,
      message: '请输入年龄',
      trigger: ['submit'],
    },
  },
};
const formValue = reactive({
  user: { age: '', name: '' },
});

function handleValidateClick(e: MouseEvent) {
  e.preventDefault();
  formRef.value?.validate(errors => {
    console.log(errors);
  });
}
</script>
