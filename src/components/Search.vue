<script setup lang="ts">
import Button from "./ui/button/Button.vue";
import Input from "./ui/input/Input.vue";
import { useMoviesStore } from "@/stores/movies";
import CloseCircleOutline from "vue-material-design-icons/CloseCircleOutline.vue";

const store = useMoviesStore();

import { ref } from "vue";

const search = ref("");

const updateSearchText = () => {
  store.setSearchText(search.value);
};
const clearSearchText = () => {
  search.value = "";
  store.setSearchText("");
};
</script>

<template>
  <div class="flex items-center gap-3 md:mr-3 w-full md:w-auto mb-4">
    <div class="flex w-full max-w-full md:max-w-sm items-center gap-1.5">
      <div class="relative w-full">
        <Input
          v-model="search"
          @keyup="updateSearchText"
          type="text"
          placeholder="Start typing"
          class="pr-5 text-black w-full md:w-auto"
        />

        <button
          class="absolute right-1 top-2"
          @click="clearSearchText"
          v-if="search.length > 0"
        >
          <CloseCircleOutline class="text-black" />
        </button>
      </div>
    </div>
  </div>
</template>