<script setup>
import { useRouter, useRoute } from "vue-router";

defineProps({
  title: String,
});

const router = useRouter();
const route = useRoute();
</script>

<template>
  <div class="back" @click="router.push(`/title/${route.params.titleId}`)">
    <span class="material-symbols-outlined">arrow_back</span>
    <span>{{ title }}</span>
  </div>
</template>

<style scoped>
.back {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  cursor: pointer;
}

.material-symbols-outlined {
  font-size: 16px;
  vertical-align: middle;
}
</style>