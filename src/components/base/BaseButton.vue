<template>
  <button @click="handleClick">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits(['click'])

const handleClick = () => {
  emit('click')
}
</script>

<style scoped>
button {
  padding: 10px 20px;
  cursor: pointer;
}
</style>