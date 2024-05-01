<script setup lang="ts">
import { computed } from "vue";
import Badge from "./ui/badge/Badge.vue";
import { useMoviesStore } from "@/stores/movies";

const store = useMoviesStore();

const getActiveFilters = computed(() => store.getActiveFilters);
const getNotActiveFilter = computed(() => store.getNotActiveFilter);
</script>

<template>
  <Badge
    class="cursor-pointer whitespace-nowrap"
    variant="secondary"
    @click="store.toggleBadgeToFilterList(obj)"
    v-for="(obj, index) in getActiveFilters"
    :key="index"
    >{{ obj }}</Badge
  >

  <Badge
    class="cursor-pointer whitespace-nowrap"
    @click="store.toggleBadgeToFilterList(obj)"
    v-for="(obj, index) in getNotActiveFilter"
    :key="index"
    >{{ obj }}</Badge
  >
</template>
