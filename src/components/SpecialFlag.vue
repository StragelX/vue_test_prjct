<script setup lang="ts">
const props = defineProps({ data: Object });
</script>

<template>
  <div
    class="absolute top-4 right-0 py-1 px-2 text-white"
    :class="props.data.isHot ? 'bg-red-600' : 'bg-green-400'"
  >
    {{ props.data.isHot ? "Hot" : "" }}
    {{ props.data.isNew ? "New" : "" }}
  </div>
</template>

<style></style>