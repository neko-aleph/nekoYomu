<script setup>
import { useRouter, useRoute } from "vue-router";

const props = defineProps({
  id: String,
  number: Number,
  title: String,
  chapters: Object,
  provider: String,
});

const router = useRouter();
const route = useRoute();

function goToChapter() {
  sessionStorage.setItem("chapters", JSON.stringify(props.chapters));
  router.push(`/title/${route.params.titleId}/${props.provider}/chapter/${encodeURIComponent(props.id)}`);
}
</script>

<template>
  <div class="chapter" @click="goToChapter">
    <span class="text">{{
      number && title ? `Ch. ${number} - ${title}`
        : title ? title
        : number ? `Ch. ${number}`
        : "Ch. unknown"
    }}</span>
    <div class="after">
      <span class="material-symbols-outlined">arrow_forward</span>
    </div>
  </div>
</template>

<style scoped>
.chapter {
  width: 310px;
  height: 50px;
  border-radius: 12px;
  background-color: var(--neko-theme-secondary-bg-color);
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  border: 1px solid var(--neko-theme-quinary-bg-color);
}

@media screen and (min-width: 1210px) {
  .chapter {
    width: 100%;
  }
}

.text {
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 20px;
}

.after {
  color: var(--neko-theme-text-color);
  display: flex;
  flex-direction: row;
  align-items: center;
}

.material-symbols-outlined {
  font-size: 16px;
  vertical-align: middle;
}
</style>