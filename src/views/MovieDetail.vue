<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { useMoviesStore } from "@/stores/movies";
import Rating from "@/components/Rating.vue";
import Slider from "@/components/Slider.vue";

const route = useRoute();
const id = route.params.id;
const store = useMoviesStore();

store.getMovieById(id);

const movie = computed(() => store.getSelectedMovie);
</script>

<template>
  <div class="container">
    <div class="py-16 px-4">
      <div class="flex mb-20">
        <div class="w-1/4">
          <img
            :src="movie.posterLink"
            :alt="movie.name"
            class="w-full h-auto object-cover object-center"
          />
        </div>

        <div class="w-3/4 pl-8">
          <h1 class="text-white text-2xl font-semibold mb-1">
            {{ movie.name }}
          </h1>

          <p class="flex text-gray-400 mb-4">
            {{ movie.ganre }}
          </p>

          <Rating :rating="movie.rating" class="mb-4" />

          <p class="text-gray-300 text-lg mb-4">
            {{ movie.description }}
          </p>
        </div>
      </div>

      <h2 class="mb-6 text-3xl">Watch trailer</h2>

      <iframe
        class="w-full lg:h-[600px]"
        :src="movie.videoLink"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  </div>

  <Slider class="mb-20" />
</template>