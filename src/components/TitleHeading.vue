<script setup>
defineProps({
  title: String,
});
</script>

<template>
  <h2>{{ title }}</h2>
</template>

<style scoped>
h2 {
  text-align: center;
  margin: 0;
}
</style>