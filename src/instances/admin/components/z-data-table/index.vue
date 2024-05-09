<template>
  <UseElementBounding v-slot="{ height }" class="h-full overflow-hidden">
    <div>
      <n-data-table
        :columns="columns"
        :data="data"
        :pagination="paginationReactive"
        :style="{ height: `${height}px` }"
        flex-height
      />
    </div>
  </UseElementBounding>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { UseElementBounding } from '@vueuse/components';

const props = defineProps<Props>();

interface Props {
  fetch: Function;
}

defineOptions({
  name: 'ZDataTable',
});
const columns = [
  {
    title: '昵称',
    key: 'name',
  },
  {
    title: '创建时间',
    key: 'createdOn',
  },
];

const data = ref([]);
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

async function init() {
  const { page, pageSize } = paginationReactive;
  const { record, pageCount } = await props.fetch({ page, pageSize });
  data.value = record;
  paginationReactive.pageCount = pageCount;
}

init();
</script>
