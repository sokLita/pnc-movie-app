<template>
  <div>
    <h1>Welcome to my homepage</h1>

    <BaseButton @click="test">
      Testing
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
const test = () => {
  alert('Hello World')
}
</script>