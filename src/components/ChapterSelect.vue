<script setup>
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import BaseSelect from "./BaseSelect.vue";

defineProps({
  chapters: Array,
});

const router = useRouter();
const route = useRoute();

const selectedChapterId = ref(route.params.chapterId);

watch(selectedChapterId, (newId) => {
  if (!newId) return;
  router.push(`/title/${route.params.titleId}/${route.params.provider}/chapter/${encodeURIComponent(newId)}`);
});
</script>

<template>
  <BaseSelect v-model="selectedChapterId">
    <option
        v-for="chapter in chapters"
        :key="chapter.id"
        :value="chapter.id"
    >
      {{ chapter.title ? chapter.title : `Ch. ${chapter.chapterNumber || chapter.chapter || "Unknown"}`}}
    </option>
  </BaseSelect>
</template>