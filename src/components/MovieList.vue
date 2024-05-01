<script setup lang="ts">
import MoviePreviewCard from "./MoviePreviewCard.vue";
import { computed } from "vue";
import { useMoviesStore } from "@/stores/movies";

const store = useMoviesStore();

const isLoading = computed(() => store.isLoading);
const error = computed(() => store.error);
const movies = computed(() => store.getMoviesList);
</script>

<template>
  <div class="container">
    <section class="bg-zinc-300 py-16 px-4">
      <div
        class="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:mb-12 text-black"
      >
        <p v-if="isLoading">Loading...</p>

        <p v-else-if="error">{{ error }}</p>

        <template v-else-if="movies.length > 0">
          <MoviePreviewCard
            :movie="{ ...obj }"
            v-for="(obj, index) in movies"
            :key="index"
          />
        </template>

        <p v-else>No data available.</p>
      </div>
    </section>
  </div>
</template>
