<script setup>
import { useRoute, useRouter } from "vue-router";

defineProps({
  nextId: String,
});

const route = useRoute();
const router = useRouter();
</script>

<template>
  <div class="content">
    <button 
      @click="router.push(`/title/${route.params.titleId}/${route.params.provider}/chapter/${encodeURIComponent(nextId)}`)"
    >
      Next chapter
    </button>
  </div>
</template>

<style scoped>
.content {
  padding: 40px;
}

button {
  height: 50px;
  border-radius: 12px;
  padding: 14px;
  box-sizing: border-box;
  width: 310px;
  background-color: var(--neko-theme-button-color);
  color: var(--neko-theme-button-text-color);
  font-size: 16px;
  font-family: "Geist", sans-serif;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid var(--neko-theme-quinary-bg-color);
}


@media screen and (min-width: 1210px) {
  .content {
    padding: 0;
  }

  button {
    width: 620px;
  }
}
</style>