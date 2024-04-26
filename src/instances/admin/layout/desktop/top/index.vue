<template>
  <div>
    <ZTopMenu />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ZTopMenu from '@admin/layout/desktop/top/z-top-menu/index.vue';
export default defineComponent({
  name: 'LayoutTop',
  components: { ZTopMenu },
});
</script>
