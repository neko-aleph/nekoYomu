<script setup>
import { ref } from "vue";

defineProps({
  image: String,
});

const loaded = ref(false);
</script>

<template>
  <div v-if="!loaded" class="placeholder">
    <p>Loading...</p>
  </div>
  <img :src="image" @load="loaded = true">
</template>

<style scoped>
img {
  width: 100%;
  max-width: 620px;
  object-fit: contain;
  background-color: var(--neko-theme-secondary-bg-color);
}

.placeholder {
  background-color: var(--neko-theme-secondary-bg-color);
  color: var(--neko-theme-hint-color);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 620px;
  height: 620px;
}
</style>