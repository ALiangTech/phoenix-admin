<template>
  <section class="flex justify-center items-center z-1 text-nowrap">
    <div class="rounded-10px flex flex-col">
      <div class="pb-2 text-#aa54ff">
        <h2 class="m0 text-8 text-#aa54ff">启其门户，入于系统</h2>
        <span class="text-6">欢迎来到凤凰平台</span>
      </div>
      <div class="text-left">
        <n-form
          ref="formRef"
          :label-width="80"
          :model="formValue"
          :rules="rules"
          size="small"
        >
          <n-form-item label="姓名" path="name">
            <n-input
              v-model:value="formValue.username"
              :allow-input="noSpace"
              placeholder="输入姓名"
            />
          </n-form-item>
          <n-form-item label="密码" path="pwd">
            <n-input
              v-model:value="formValue.password"
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
            type="primary"
            @click="handleValidateClick"
          >
            登录
          </n-button>
        </div>
      </div>
      <div class="flex-1 flex flex-col flex-justify-end pb-4">
        <div>
          <n-button text>没有账号?注册一个吧</n-button>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { FormInst } from 'naive-ui';
import to from 'await-to-js';
import http from '@/axios';
import LocalForage from '@/localforage';
import { useModifyInstanceType } from '@/hooks';

defineOptions({
  name: 'LoginForm',
});

const { modifyInstanceType } = useModifyInstanceType();

interface API_DATA {
  username: string;
  password: string;
}

const formRef = ref<FormInst | null>(null);
const rules = {
  username: {
    required: true,
    message: '请输入姓名',
    trigger: ['submit'],
  },
  password: {
    required: true,
    message: '请输入密码',
    trigger: ['submit'],
  },
};
const loading = ref(false);
const formValue = reactive<API_DATA>({
  password: '',
  username: '',
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

interface LoginResult {
  jwt: string;
}

async function ApiLogin(data: API_DATA) {
  loading.value = true;
  const [, result] = await to<LoginResult, Axios.Error>(
    http.post('/pf_login/api/v1/login', data),
  );
  loading.value = false;
  if (result) {
    // 登录成功
    const { jwt } = result;
    await LocalForage.setItem('jwt', jwt);
    LocalForage.setItem('instance-type', 'admin').then(() => {
      // 存储成功
      modifyInstanceType('admin'); // 修改要渲染实例类型 这边修改 主容器就会修改渲染实例
    });
  }
}
</script>
