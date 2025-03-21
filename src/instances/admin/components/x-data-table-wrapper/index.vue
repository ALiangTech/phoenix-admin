<template>
<section class="h-full grid grid-cols-1 grid-rows-[42px_1fr] overflow-hidden rounded-1" :style="bgStyle">
  <header class="flex justify-between items-center px-4">
    <h4 class="m-0">{{ props.title }}</h4>
    <nav>
      <n-button type="primary" size="small">创建</n-button>
    </nav>
  </header>
  <div class="px-2 pt-1">
    <ZDataTable :fetch="props.fetch" :config="props.config"></ZDataTable>
  </div>
</section>
</template>
<script setup lang="ts">
import type { Props as tableProps } from './../z-data-table/interface';
import { useModeStyle } from '@admin/hooks';
defineOptions({
  name: 'ZDataTableWrapper'
})
interface Props {
  title: string;
}

const props = defineProps<Props & tableProps>();
const { bgStyle } = useModeStyle()

</script>
<style scoped>

</style>