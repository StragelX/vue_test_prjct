<script setup lang="ts">
import Header from "./components/Header.vue";
import { useMoviesStore } from "@/stores/movies";

const store = useMoviesStore();

store.fetchMovies();
</script>

<template>
  <Header />

  <router-view />
</template>
