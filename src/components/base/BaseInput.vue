<template>
  <div>
    <label :for="props.id">{{ props.label }}</label>
    <input
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