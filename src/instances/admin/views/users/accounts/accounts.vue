<template>
  <section>
    <ZDataTableWrapper :title="title" :fetch="loadData" :config="tableConfig"></ZDataTableWrapper>
  </section>
</template>
<script setup lang="ts">
import http from '@/axios';

const title = '账号管理';
const loadData = (params: any) => {
  return http.get('/pf_admin/api/v1/protected/user/account/list', { params });
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

</script>
