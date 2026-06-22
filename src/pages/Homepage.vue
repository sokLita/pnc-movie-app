<template>
  <div>
    <h1 class="text-center text-2xl bg-blue-600 text-white p-3 rounded-lg">Welcome to my homepage</h1>
    <h1>Do you Love me?</h1>
    <p>I love you</p>

    <base-button @click="test">
      Testing
    </base-button>

    <base-input class=""
      label="Username"
      v-model="username"
      name="username"
      placeholder="Enter your username"
    />
   
    <p class="text-blue-600">{{ username }}</p>

    <base-radio label="Male" name="gender" id="male" value="Male" v-model="gender"/>
    <base-radio label="Female" name="gender" id="female" value="Female" v-model="gender" />

    <p class="text-blue-500">{{ gender }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const age = ref('');
const username = ref('');
const gender = ref('');

const test = () => {
  alert('Hello World')
}
</script>