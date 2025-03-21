<template>
  <section class="h-full">
    <ZDataTable :fetch="loadData"></ZDataTable>
    <CreateRoleDialogRoles></CreateRoleDialogRoles>
  </section>
</template>
<script setup lang="ts">
import CreateRoleDialogRoles from './widgets/create-role-dialog.vue';
import { ApiGetRoleList } from '@admin/views/users/roles/page/home/api';
defineOptions({
  name: 'UserRoles',
});
const loadData = async (params: any) => {
  return await  ApiGetRoleList(params);
};
</script>
