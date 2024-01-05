<template>
  <slot v-if="hasPermission"></slot>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    code: {
      type: String,
      default: '',
    },
    permissionCodeSet: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    hasPermission() {
      return this.permissionCodeSet.includes(this.code);
    },
  },
});
</script>
