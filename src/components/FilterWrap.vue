<script setup lang="ts">
import Search from "./Search.vue";
import FilterList from "./FilterList.vue";
</script>

<template>
  <div class="container">
    <aside class="flex items-baseline gap-1 mb-6 py-4 flex-wrap">
      <Search />

      <FilterList />
    </aside>
  </div>
</template>