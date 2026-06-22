<template>
  <div>

    <label :for="props.id">
      <span>{{ props.label }}</span>
      <input type="radio" :name="props.name" :id="props.id" :value="value"
      v-model="model">
    </label>
    
  </div>
</template>

<script setup>
import {defineProps, defineModel} from 'vue';

const model = defineModel();
const props = defineProps({
    label: String,
    name: String,
    id: String,
    value: String,
    default: false
  
})
</script>

<style scoped lang="scss">
</style>