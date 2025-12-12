<script setup>
import TitleDescription from "./TitleDescription.vue";
import TitleHeading from "./TitleHeading.vue";
import TitleMeta from "./TitleMeta.vue";

defineProps({
  title: String,
  year: Number,
  status: String,
  description: String,
});
</script>

<template>
  <div class="info">
    <TitleHeading :title="title" />
    <TitleMeta :year="year" :status="status" />
    <TitleDescription :text="description" />
  </div>
</template>

<style scoped>
.info {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 310px;
  align-items: center;
}

@media screen and (min-width: 1210px) {
  .info {
    width: 100%;
    align-items: flex-start;
  }
}
</style>