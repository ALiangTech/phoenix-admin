<template>
  <section>
    roles
    <CreateRoles></CreateRoles>
  </section>
</template>
<script setup lang="ts">
import CreateRoles from './create.vue';
defineOptions({
  name: 'UserRoles',
});
</script>
