<template>
  <div class="flex gap-3 ">
    <label :for="props.id">{{ props.label }}</label>
    <input class="border-1 rounded-lg p-1.5"
      :type="props.type"
      :id="props.id"
      :name="props.name"
      :placeholder="props.placeholder"
      v-model="model"
    />

    
  </div>
</template>

<script setup>
import {defineProps, defineModel} from 'vue';

const model = defineModel()
const props = defineProps({
  label: {
    type: String,
  },
  type: {
    type: String,
    default: "text",
  },
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  placeholder: {
    type: String,
  },
});
</script>

<style scoped lang="scss">
</style>