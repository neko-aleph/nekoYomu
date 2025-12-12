<script setup>
import BaseSelect from "./BaseSelect.vue";

const modelValue = defineModel();

defineProps({
  providers: Array,
});
</script>

<template>
  <BaseSelect v-model="modelValue">
    <option
        v-for="provider in providers"
        :key="provider"
    >
      {{ provider }}
    </option>
  </BaseSelect>
</template>