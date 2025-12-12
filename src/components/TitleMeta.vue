<script setup>
defineProps({
  year: Number,
  status: String,
});
</script>

<template>
  <p>{{ year }}・{{ status }}</p>
</template>

<style scoped>
p {
  text-align: center;
  margin: 0;
}
</style>