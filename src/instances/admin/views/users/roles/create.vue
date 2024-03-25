<template>
  <div>
    <n-button @click="show = true"> 创建角色 </n-button>
    <!-- 创建角色侧边弹窗 -->
    <n-drawer v-model:show="show" :width="540">
      <n-drawer-content title="创建角色" closable>
        <ZNestChecked v-model="codes" :data="permissions"></ZNestChecked>
        <div>
          <n-button type="primary" @click="handleCreateRole">
            Primary
          </n-button>
        </div>
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
const codes = ref<string[]>([]);

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
        value: 'account',
        children: [
          {
            label: '创建账号',
            value: 'account_add',
            children: [],
          },
        ],
      },
      {
        label: '角色管理',
        value: 'role',
        children: [
          {
            label: '创建角色',
            value: 'role_add',
            children: [],
          },
          {
            label: '删除角色',
            value: 'role_del',
            children: [],
          },
        ],
      },
    ],
  },
];

function handleCreateRole() {
  console.log(codes);
}
</script>
