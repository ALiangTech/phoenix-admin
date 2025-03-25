<template>
  <UseElementBounding v-slot="{ height }" class="h-full overflow-hidden">
    <div>
      <n-data-table
        v-bind="props.config"
        :data="data"
        :loading="loading"
        :pagination="paginationReactive"
        :style="{ height: `${height}px` }"
        flex-height
      />
    </div>
  </UseElementBounding>
</template>

<script setup lang="ts">
import { reactive, ref, onBeforeMount, watch } from 'vue';
import { UseElementBounding } from '@vueuse/components';
import type { Props } from './interface.ts'
const props = defineProps<Props>();
defineOptions({
  name: 'XDataTable',
});
const data = ref([]);
const loading = ref(false);
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
// 加载数据
async function loadData() {
  try {
    loading.value = true;
    const { page, pageSize } = paginationReactive;
    const { list, total } = await props.fetch({ page, size: pageSize });
    data.value = list;
    paginationReactive.pageCount = total;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
}
// 监听 page和pageSize变化就重新获取加载
watch([() => paginationReactive.page, () => paginationReactive.pageSize], () => {
  loadData();
});
// 刷新列表数据
async function refresh(init = true) {
  if (init) { // 是否从第一页开始加载数据
    paginationReactive.page = 1;
  } else {
    await loadData()
  }
}
// 初始化数据
async function init() {
  await loadData();
}
defineExpose({
  refresh,
});
onBeforeMount(async () => {
 await init();
});
</script>
