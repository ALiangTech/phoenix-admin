<template>
  <div>
    <n-button @click="show = true"> 创建角色 </n-button>
    <!-- 创建角色侧边弹窗 -->
    <n-drawer v-model:show="show" :width="540">
      <n-drawer-content title="创建角色" closable>
        <ZNestChecked :data="permissions"></ZNestChecked>
      </n-drawer-content>
    </n-drawer>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import ZNestChecked from './components/z-nest-checkeds.vue';
defineOptions({
  name: 'CreateRoles',
});
const show = ref(false);

interface PermissionItem {
  label: string;
  value: string;
  children: PermissionItem[];
}

const permissions: PermissionItem[] = [
  {
    label: '用户管理',
    value: 'user',
    children: [
      {
        label: '账号管理',
        value: 'accounts',
        children: [
          {
            label: '创建账号',
            value: 'createAccount',
            children: [],
          },
        ],
      },
      {
        label: '角色管理',
        value: 'roles',
        children: [
          {
            label: '创建角色',
            value: 'createRole',
            children: [],
          },
          {
            label: '删除角色',
            value: 'deleteAccount',
            children: [],
          },
        ],
      },
    ],
  },
  {
    label: '测试管理',
    value: 'testuser',
    children: [
      {
        label: '账号管理',
        value: 'testaccounts',
        children: [
          {
            label: '创建账号',
            value: 'testcreateAccount',
            children: [],
          },
        ],
      },
      {
        label: '角色管理',
        value: 'testroles',
        children: [
          {
            label: '创建角色',
            value: 'testcreateRoles',
            children: [],
          },
          {
            label: '删除角色',
            value: 'testdeleteAccount',
            children: [],
          },
        ],
      },
    ],
  },
];
</script>
