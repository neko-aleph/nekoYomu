<script setup>
import BackButton from "./BackButton.vue";
import ChapterSelect from "./ChapterSelect.vue";

defineProps({
  title: String,
  chapters: Array,
});
</script>

<template>
  <div class="controls">
    <BackButton :title="title" />
    <ChapterSelect :chapters="chapters" />
  </div>
</template>

<style scoped>
.controls {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1130px;
}
</style>
