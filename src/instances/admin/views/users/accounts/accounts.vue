<template>
  <section class="h-full">
    <ZDataTable :fetch="loadData"></ZDataTable>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import ZDataTable from '@admin/components/z-data-table/index.vue';
import http from '@/axios';

export default defineComponent({
  name: 'UserAccounts',
  components: { ZDataTable },
  setup() {
    const loadData = (params: any) => {
      return http.get('/v1/users', { params });
    };
    return {
      loadData,
    };
  },
});
</script>
