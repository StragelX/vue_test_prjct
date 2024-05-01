<script setup lang="ts">
import { computed } from "vue";
import Card from "./ui/card/Card.vue";
import CardContent from "./ui/card/CardContent.vue";
import Carousel from "./ui/carousel/Carousel.vue";
import CarouselContent from "./ui/carousel/CarouselContent.vue";
import CarouselItem from "./ui/carousel/CarouselItem.vue";
import CarouselNext from "./ui/carousel/CarouselNext.vue";
import CarouselPrevious from "./ui/carousel/CarouselPrevious.vue";
import { useMoviesStore } from "@/stores/movies";

const store = useMoviesStore();

const getHotMovies = computed(() => store.getHotMovies);
</script>

<template>
  <div class="container">
    <div class="bg-orange-500 py-6 px-8">
      <h2 class="mb-6 font-semibold text-xl text-black">Rated HOT</h2>

      <Carousel
        class="relative w-full"
        :opts="{
          align: 'start',
          loop: true,
        }"
      >
        <CarouselContent class="-ml-1">
          <CarouselItem
            v-for="(item, index) in getHotMovies"
            :key="index"
            class="pl-1 md:basis-1/3 lg:basis-1/5"
          >
            <router-link
              :to="{
                name: 'MovieDetail',
                params: { id: item.id },
              }"
            >
              <div class="p-1">
                <Card>
                  <CardContent
                    class="flex items-center p-1 justify-center overflow-hidden"
                  >
                    <div class="aspect-square mb-2 w-full">
                      <img
                        :src="item.posterLink"
                        :alt="item.name"
                        class="w-full h-full object-cover object-center"
                      />

                      <h2 class="text-black line-clamp-1">{{ item.name }}</h2>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </router-link>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  </div>
</template>

<style></style>