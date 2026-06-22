<template>
  <div class="min-h-screen bg-gray-100 py-10">
    <div class="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-8">

      <!-- Header -->
      <h1 class="text-3xl font-bold text-center bg-blue-600 text-white py-3 rounded-lg mb-6">
        Welcome to My Homepage
      </h1>

      <!-- Introduction -->
      <div class="text-center mb-6">
        <h2 class="text-xl font-semibold text-gray-700">
          Do you Love me?
        </h2>
        <p class="text-red-600 text-lg font-medium mt-2">
          I love you
        </p>
      </div>

      <!-- Button -->
      <div class="flex justify-center mb-6">
        <base-button
          @click="test"
          class="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-lg shadow transition duration-300"
        >
          Testing
        </base-button>
      </div>

      <!-- input -->
      <div class="mb-6">
        <base-input label="Username"    v-model="username"   name="username"   placeholder="Enter your username" />
        <p class="mt-2 text-blue-600 font-medium">
          Username: {{ username }}
        </p>
      </div>

      <!-- radio -->
      <div class="mb-6">
        <h3 class="text-lg font-semibold text-gray-700 mb-3">
          Select Gender
        </h3>

        <div class="flex gap-6"> 
          <base-radio  label="Male" name="gender" id="male" value="Male" v-model="gender" />
          <base-radio  label="Female" name="gender" id="female" value="female" v-model="gender" />
        </div>
        <p class="mt-3 text-blue-500 font-medium">
          Gender: {{ gender }}
        </p>
      </div>

      <!-- <! checkbox // -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-3">
          Select Your Interests
        </h3>

        <div class="grid grid-cols-2 gap-3">
          <base-checkbox   name="interest" label="Football" id="football" value="football"  v-model="interests" />
          <base-checkbox name="interest" label="Volleyball" id="volleyball" value="volleyball"  v-model="interests"/>
          <base-checkbox name="interest"  label="Cycling" id="cycling" value="cycling" v-model="interests"/>
          <base-checkbox  name="interest"  label="Basketball"  id="basketball" value="basketball" v-model="interests"/>
        </div>
        <div class="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <p class="font-semibold text-blue-700">
            Interests:
          </p>
          <p class="text-gray-700">
            {{ interests}}
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const age = ref('')
const username = ref('')
const gender = ref('')
const interests = ref([])

const test = () => {
  alert('Hello World')
}
</script>