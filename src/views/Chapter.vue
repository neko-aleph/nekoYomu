<script setup>
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {useMediaQuery} from "@vueuse/core";
import {getChapter} from "../api/api";
import ChapterControls from "../components/ChapterControls.vue";
import Header from "../components/Header.vue";
import NextChapterButton from "../components/NextChapterButton.vue";
import FooterNotice from "../components/FooterNotice.vue";
import Page from "../components/Page.vue";

const proxy = import.meta.env.VITE_CORS_PROXY_URL;
const otherProxy = import.meta.env.VITE_OTHER_CORS_PROXY_URL;

const route = useRoute();

const chapters = JSON.parse(sessionStorage.getItem("chapters") || "[]");
const title = sessionStorage.getItem("title") || "Unknown";

const pages = ref([]);
const nextChapterId = ref(null);

const isMobile = useMediaQuery('(max-width: 1209px)')

const btoa = window.btoa;

function findNextChapterId() {
  const idx = chapters.findIndex(ch => ch.id === route.params.chapterId);
  if (idx === -1 || idx === chapters.length - 1) return null;
  return chapters[idx + 1].id;
}

onMounted(async () => {
  pages.value = await getChapter(route.params.chapterId, route.params.provider);
  nextChapterId.value = findNextChapterId(chapters, route.params.chapterId);
});
</script>

<template>
  <div class="column">
    <div v-if="!isMobile" class="content">
      <Header />
      <ChapterControls :title="title" :chapters="chapters" />
    </div>
    <div class="pages" v-if="pages.length">
      <Page
        v-for="page in pages"
        :key="page.img"
        :image="page.headerForImage ? `${proxy}/${ btoa(`${page.img}|${page.headerForImage.Referer}`)}` : `${otherProxy}/?url=${page.img}`"
      />
    </div>
    <NextChapterButton v-if="nextChapterId" :nextId="nextChapterId" />
    <div class="gap" v-else></div>
    <FooterNotice class="notice"/>
    <div class="gap"></div>
  </div>
</template>

<style scoped>
.column {
  min-height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.gap {
  height: 40px;
}

.content {
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
}

.pages {
  width: 100%;
  max-width: 620px;
  min-height: 620px;
  display: flex;
  flex-direction: column;
  gap: 0px;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid var(--neko-theme-quinary-bg-color);
}
</style>