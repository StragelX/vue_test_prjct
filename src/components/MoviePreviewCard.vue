<script setup lang='ts'>
import Card from "./ui/card/Card.vue";
import CardHeader from "./ui/card/CardHeader.vue";
import CardTitle from "./ui/card/CardTitle.vue";
import CardDescription from "./ui/card/CardDescription.vue";
import CardContent from "./ui/card/CardContent.vue";
import Rating from "./Rating.vue";
import SpecialFlag from "./SpecialFlag.vue";

const props = defineProps({ movie: Object });
</script>

<template>
  <router-link :to="{ name: 'MovieDetail', params: { id: props.movie.id } }">
    <Card class="hover:drop-shadow-lg transition-all relative">
      <CardHeader>
        <CardTitle
          class="md:h-[52px] line-clamp-2 max-w-[80%]"
          :title="props.movie.name"
        >
          {{ props.movie.name }}
        </CardTitle>

        <CardDescription>{{ props.movie.ganre }}</CardDescription>

        <Rating :rating="props.movie.rating" />
      </CardHeader>

      <CardContent class="group h-[285px] lg:h-[400px]">
        <div
          class="relative rounded-md overflow-hidden h-full outline outline-slate-300 outline-1"
        >
          <img
            :src="props.movie.posterLink"
            :alt="props.movie.name"
            class="w-full h-full object-cover relative z-10 group-hover:opacity-0 transition-opacity"
          />

          <p class="absolute top-0 overflow-hidden p-4">
            {{ props.movie.description }}
          </p>
        </div>
      </CardContent>

      <SpecialFlag :data="props.movie.extras" v-if="props.movie.extras" />
    </Card>
  </router-link>
</template>