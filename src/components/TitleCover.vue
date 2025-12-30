<script setup>
defineProps({
  image: String,
});
</script>

<template>
  <div class="center">
    <img :src="image" class="cover">
  </div>
</template>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.cover {
  width: 270px;
  height: 400px;
  border-radius: 12px;
  object-fit: cover;
  box-sizing: border-box;
  background-color: var(--neko-theme-secondary-bg-color);
  border: 1px solid var(--neko-theme-quinary-bg-color);
}

@media screen and (min-width: 1210px) {
  .cover {
    width: 162px;
    height: 240px;
  }

  .center {
    margin-top: 0 !important;
  }
}
</style>