<template>
  <section class="h-full">
    <ZDataTable :fetch="loadData"></ZDataTable>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import ZDataTable from '@admin/components/z-data-table/index.vue';

export default defineComponent({
  name: 'UserAccounts',
  components: { ZDataTable },
  setup() {
    const loadData = () => {
      return Promise.resolve([]);
    };
    return {
      loadData,
    };
  },
});
</script>
