<template>
  <UseElementBounding v-slot="{ height }" class="h-full overflow-hidden">
    <div>
      <n-data-table
        :columns="columns"
        :data="data"
        :pagination="pagination"
        :style="{ height: `${height}px` }"
        flex-height
      />
    </div>
  </UseElementBounding>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { UseElementBounding } from '@vueuse/components';

const columns = [
  {
    title: 'Name',
    key: 'name',
  },
  {
    title: 'Age',
    key: 'age',
  },
  {
    title: 'Address',
    key: 'address',
  },
];

const data = Array.from({ length: 46 }).map((_, index) => ({
  key: index,
  name: `Edward King ${index}`,
  age: 32,
  address: `London, Park Lane no. ${index}`,
}));

export default defineComponent({
  name: 'ZDataTable',
  components: { UseElementBounding },
  props: {
    fetch: {
      type: Function, // 获取表格数据接口
      required: true,
    },
  },
  setup() {
    const paginationReactive = reactive({
      page: 1,
      pageSize: 20,
      showSizePicker: true,
      pageSizes: [10, 20, 50, 100],
      pageCount: 100,
      onChange: (page: number) => {
        paginationReactive.page = page;
      },
      onUpdatePageSize: (pageSize: number) => {
        paginationReactive.pageSize = pageSize;
        paginationReactive.page = 1;
      },
    });

    return {
      data,
      columns,
      pagination: paginationReactive,
    };
  },
});
</script>
