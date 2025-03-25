<template>
  <section class="h-full">
    <XDataTableWrapper ref="table" :title="title" :fetch="loadData" :config="tableConfig">
      <XButton type="primary" size="small" @click="onCreate">创建</XButton>
    </XDataTableWrapper>
    <CreateRoleDrawer v-model:show="openDrawer" @success="onSuccess" ></CreateRoleDrawer>
  </section>
</template>
<script setup lang="ts">
import CreateRoleDrawer from './widgets/create-role-drawer.vue';
import { XDataTableWrapper } from '@admin/components'
import { ApiGetRoleList } from '@admin/views/users/roles/page/home/api';
import { ref, unref } from 'vue';
import { useTemplateRef } from 'vue'
defineOptions({
  name: 'UserRoles',
});

type TableInstance = InstanceType<typeof XDataTableWrapper>
const tableRef = useTemplateRef<TableInstance>('table')

const title = '角色列表';
const loadData = async (params: any) => {
  return await  ApiGetRoleList(params);
};
const tableConfig = {
  columns: [
    {
      title: '用户名',
      key: 'name',
    },
    {
      title: '邮箱',
      key: 'create_at',
    }
  ]
}
const openDrawer = ref(false);
const onCreate = () => {
  openDrawer.value = true;
};
const onSuccess = () => {
  openDrawer.value = false;
  unref(tableRef)?.refresh();
}
</script>
