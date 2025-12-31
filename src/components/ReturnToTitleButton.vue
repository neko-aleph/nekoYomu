<script setup>
import { useRoute } from "vue-router";
import BaseNavigationButton from "./BaseNavigationButton.vue";

const route = useRoute();
</script>

<template>
  <BaseNavigationButton :target="`/title/${route.params.titleId}/`">
    Return to title
  </BaseNavigationButton>
</template>