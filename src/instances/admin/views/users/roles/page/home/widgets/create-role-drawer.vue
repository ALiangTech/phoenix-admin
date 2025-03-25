<template>
  <n-drawer width="50%">
    <n-drawer-content title="创建角色" closable>
      <n-form
        ref="formRef"
        :label-width="80"
        :rules="rules"
        :model="formValue"
      >
        <n-form-item label="角色名称" path="name">
          <n-input v-model:value="formValue.name" maxlength="20" show-count placeholder="请输入用户角色名称" />
        </n-form-item>
        <n-form-item label="权限" path="codes">
          <ZNestChecked v-model:value="formValue.codes" :data="permissions"></ZNestChecked>
        </n-form-item>
      </n-form>
      <template #footer>
        <XButton attr-type="button" type="primary" @click="onSubmit">提交</XButton>
      </template>
    </n-drawer-content>
  </n-drawer>
</template>
<script setup lang="ts">
import { onBeforeMount, ref, unref } from 'vue';
import { ApiGetPermissionTree, ApiCreateRole } from './../api';
import ZNestChecked from '../../../components/z-nest-checkeds.vue';
import type { RoleCodesTree, CreateRoleParams } from './../api';
import type { FormInst,FormRules } from 'naive-ui'
const emit = defineEmits<{
  success: [] // 具名元组语法
}>()
defineOptions({
  name: 'CreateRoleDrawer',
});
type FormValue = CreateRoleParams
const permissions = ref<RoleCodesTree>([])


// 表单相关
function withForm() {
  const rules:FormRules = {
    name: {
      required: true,
      type: "string",
      trigger: 'change',
      message: '请输入角色名称',
    },
    codes: {
      required: true,
      type: "array",
      trigger: 'change',
      message: '请选择权限',
    },
  };
  return {
    formRef: ref<FormInst>(),
    formValue: ref<FormValue>({
      name: '',
      codes: [],
    }),
    rules,
  }
}
const {formRef, formValue, rules} = withForm()

// 提交
function onSubmit(e:MouseEvent) {
  e.preventDefault()
  formRef.value?.validate(async (errors) => {
    if (!errors) {
      await ApiCreateRole(unref(formValue));
      emit('success')
    }
    else {
      console.error(errors)
    }
  })
}

onBeforeMount(async () => {
  permissions.value = await ApiGetPermissionTree();
})
</script>
