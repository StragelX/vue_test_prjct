<script setup lang="ts">
</script>

<template>
  <div class="container">
    <div class="flex justify-between items-center mb-6 py-4 border-b">
      <a href="/">
        <img src="@/assets/logo.svg" alt="logo" />
      </a>

      <nav>
        <ul class="flex gap-6">
          <router-link :to="{ name: 'Home' }" active-class="underline"
            >Home</router-link
          >
          <router-link :to="{ name: 'About' }" active-class="underline"
            >About</router-link
          >
        </ul>
      </nav>
    </div>
  </div>
</template>

<style></style>