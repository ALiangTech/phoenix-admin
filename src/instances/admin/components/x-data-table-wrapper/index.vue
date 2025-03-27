<template>
<section
  class="h-full grid grid-cols-1 grid-rows-[42px_1fr] overflow-hidden rounded-1">
  <header class="flex justify-between items-center px-4">
    <h4 class="m-0">{{ props.title }}</h4>
    <nav class="flex">
      <slot></slot>
    </nav>
  </header>
  <div class="px-2 pt-1 mb-12px overflow-hidden">
    <XDataTable ref="table" :fetch="props.fetch" :config="props.config"></XDataTable>
  </div>
</section>
</template>
<script setup lang="ts">
import { useTemplateRef,unref } from 'vue'
import { XDataTable } from '@admin/components'
import type { Props as tableProps } from './../z-data-table/interface';
const props = defineProps<Props & tableProps>();
defineOptions({
  name: 'XDataTableWrapper'
})
interface Props {
  title: string;
}
type TableInstance = InstanceType<typeof XDataTable>
const xDataTableRef = useTemplateRef<TableInstance>('table')
async function refresh(init = false) {
  await unref(xDataTableRef)?.refresh(init)
}
defineExpose({
  refresh
})
</script>
