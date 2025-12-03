<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { storeToRefs } from 'pinia'
import LeftArrowIcon from '~icons/material-symbols/arrow-left-rounded'
import { RouteName } from '@/router/RouteName'
import { useCoreStore } from '@/store/useCoreStore'

const imgUrl = new URL('@/assets/images/animatedDog1.gif', import.meta.url).href

/* -----------------------------
  Head Customization
----------------------------- */
useHead({
  title: 'Page 2',
})

/* -----------------------------
  State
----------------------------- */
const coreStore = useCoreStore()
const { count } = storeToRefs(coreStore)
</script>

<template>
  <div class="flex flex-col gap-8 items-center justify-center">
    <h1 class="text-5xl text-sky-950 font-black font-mont">
      PAGE 2
    </h1>
    <div class="p-6 border-2 border-sky-900 rounded-lg bg-sky-700 shadow-lg shadow-sky-700/50">
      <div class="text-2xl text-sky-50 font-bold flex flex-row gap-2 min-w-sm items-center">
        <p>Count:</p>
        <span>{{ count }}</span>
      </div>
      <p class="text-sm text-sky-200 mt-2 italic">
        Current count from state management
      </p>
    </div>
    <router-link
      class="text-lg font-black underline underline-offset-2 flex items-center"
      :to="{ name: RouteName.home }"
    >
      <LeftArrowIcon class="h-6 w-6" /><span>Back to Page 1</span>
    </router-link>
  </div>
  <div class="text-sky-950 mt-12 flex flex-col items-center justify-center">
    <h2 class="text-5xl font-black font-mont">
      Asset tests
    </h2>
    <div class="mt-4 gap-4 grid grid-cols-1 lg:grid-cols-2">
      <div>
        <h3 class="text-lg font-black">
          Image from public folder
        </h3>
        <img
          src="/animatedDog2.gif"
          class="rounded-xl max-w-sm shadow-md"
          alt="Animation of dog walking"
          width="800"
          height="600"
        >
      </div>
      <div>
        <h3 class="text-lg font-black">
          Image from src assets
        </h3>
        <img
          :src="imgUrl"
          class="rounded-xl max-w-sm shadow-md"
          alt="Animation of dog running"
          width="800"
          height="600"
        >
      </div>
    </div>
  </div>
</template>
