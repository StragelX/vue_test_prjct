<script setup lang="ts">
import FilledStar from "vue-material-design-icons/Star.vue";
import StarOutline from "vue-material-design-icons/StarOutline.vue";

const props = defineProps({ rating: Number });
</script>

<template>
  <div class="flex gap-1 items-center">
    <template v-for="n in 5" :key="n">
      <FilledStar v-if="n <= props.rating" />
      <StarOutline v-else />
    </template>
  </div>
</template>