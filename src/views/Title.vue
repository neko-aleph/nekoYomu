<script setup>
import { ref, onBeforeMount, watch } from "vue";
import { useRoute } from "vue-router";
import { useMediaQuery } from "@vueuse/core";
import { getTitle } from "../api/api";
import Chapter from "../components/Chapter.vue";
import TitleCover from "../components/TitleCover.vue";
import Empty from "../components/Empty.vue";
import Header from "../components/Header.vue";
import TitleInfo from "../components/TitleInfo.vue";
import FooterNotice from "../components/FooterNotice.vue";
import ProviderSelect from "../components/ProviderSelect.vue";

const route = useRoute();

const image = ref(null);
const title = ref(null);
const year = ref(0);
const status = ref(null);
const description = ref(null);
const providers = ref(["mangahere", "mangadex"]);
const provider = ref("mangahere");
const chapters = ref([]);
const loaded = ref(false);

const isMobile = useMediaQuery("(max-width: 1209px)")

onBeforeMount(async () => {
  const result = await getTitle(route.params.titleId, provider.value);
  if (result) {
    image.value = result.image;
    title.value = result.title.romaji || result.title.english || result.title.native || "Unknown";
    year.value = result.releaseDate;
    status.value = result.status
    description.value = result.description
    chapters.value = result.chapters

    loaded.value = true;

    sessionStorage.setItem("title", title.value);
  }
});

watch(provider, async (newProvider) => {
  chapters.value = [];
  const result = await getTitle(route.params.titleId, newProvider);
  chapters.value = result.chapters;
});
</script>

<template>
  <div v-if="!isMobile" class="page">
    <Header />
    <div v-if="loaded" class="content">
      <div class="row">
        <TitleCover :image="image" />
        <TitleInfo :title="title" :year="year" :status="status" :description="description" />
      </div>
      <div class="row">
        <div v-if="chapters.length" class="chapters">
          <Chapter
            v-for="chapter in chapters"
            :key="chapter.id"
            :id="chapter.id"
            :provider="provider"
            :chapters="chapters"
            :number="chapter.chapterNumber || chapter.chapter || null"
            :title="chapter.title"
          />
        </div>
        <Empty v-else />
        <ProviderSelect v-model="provider" :providers="providers" />
      </div>
    </div>
    <FooterNotice />
  </div>
  <div v-if="loaded && isMobile" class="content">
    <TitleCover :image="image" />
    <TitleInfo :title="title" :year="year" :status="status" :description="description" />
    <ProviderSelect v-model="provider" :providers="providers" />
    <div v-if="chapters.length" class="chapters">
      <Chapter
          v-for="chapter in chapters"
          :key="chapter.id"
          :id="chapter.id"
          :provider="provider"
          :chapters="chapters"
          :number="chapter.chapterNumber || chapter.chapter || null"
          :title="chapter.title"
      />
    </div>
    <Empty v-else />
    <FooterNotice />
  </div>
</template>

<style scoped>
.page {
  min-height: calc(100vh - 80px);
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.content {
  min-height: calc(100vh - 80px);
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.chapters {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

@media screen and (min-width: 1210px) {
  .content {
    min-height: auto;
    padding: 0;
  }

  .row {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 20px;
    width: 1130px;
  }

  .chapters {
    width: 100%;
  }
}
</style>