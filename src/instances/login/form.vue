<template>
  <div class="px-6 text-left">
    <n-form
      ref="formRef"
      :label-width="80"
      :model="formValue"
      :rules="rules"
      size="small"
    >
      <n-form-item label="姓名" path="name">
        <n-input
          v-model:value="formValue.name"
          :allow-input="noSpace"
          placeholder="输入姓名"
        />
      </n-form-item>
      <n-form-item label="密码" path="pwd">
        <n-input
          v-model:value="formValue.pwd"
          :allow-input="noSpace"
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
      <n-button
        :loading="loading"
        block
        circle
        type="primary"
        @click="handleValidateClick"
      >
        登录
      </n-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { FormInst } from 'naive-ui';
import http from '@/axios';
interface API_DATA {
  name: string;
  pwd: string;
}
const formRef = ref<FormInst | null>(null);
const rules = {
  name: {
    required: true,
    message: '请输入姓名',
    trigger: ['submit'],
  },
  pwd: {
    required: true,
    message: '请输入密码',
    trigger: ['submit'],
  },
};
const loading = ref(false);
const formValue = reactive<API_DATA>({
  pwd: '',
  name: '',
});
function noSpace(value: string) {
  return !value.includes(' ');
}
function handleValidateClick(e: MouseEvent) {
  e.preventDefault();
  formRef.value?.validate(errors => {
    if (!errors) {
      ApiLogin(formValue);
    } else {
      console.log(errors);
    }
  });
}

function ApiLogin(data: API_DATA) {
  loading.value = true;
  http
    .post('/v2/logins', data)
    .then(data => {
      console.log(data);
    })
    .finally(() => {
      loading.value = false;
    });
}
</script>
