<template>
  <UseElementBounding v-slot="{ height }" class="h-full overflow-hidden">
    <div>
      <n-data-table
        v-bind="props.config"
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
import type { Props } from './interface.ts'

const props = defineProps<Props>();

defineOptions({
  name: 'ZDataTable',
});

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
  const { list, total } = await props.fetch({ page, size: pageSize });
  data.value = list;
  paginationReactive.pageCount = total;
}

init();
</script>
