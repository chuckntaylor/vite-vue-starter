<template>
  <div class="flex flex-col items-center justify-center gap-8">
    <h1 class="text-5xl font-black font-mont text-sky-950">PAGE 2</h1>
    <div class="border-2 border-sky-900 rounded-lg bg-sky-700 p-6 shadow-lg shadow-sky-700/50">
      <div class="min-w-sm flex flex-row items-center gap-2 text-2xl font-bold text-sky-50">
        <p>Count:</p>
        <span>{{ count }}</span>
      </div>
      <p class="mt-2 text-sm italic text-sky-200">Current count from state management</p>
    </div>
    <router-link
      class="flex items-center text-lg font-black underline underline-offset-2"
      :to="{ name: RouteName.home }"
      ><LeftArrowIcon class="h-6 w-6" /><span>Back to Page 1</span></router-link
    >
  </div>
  <div class="mt-12 flex flex-col items-center justify-center text-sky-950">
    <h2 class="text-5xl font-black font-mont">Asset tests</h2>
    <div class="grid grid-cols-1 mt-4 gap-4 lg:grid-cols-2">
      <div>
        <h3 class="text-lg font-black">Image from public folder</h3>
        <img
          src="/animatedDog2.gif"
          class="max-w-sm rounded-xl shadow-md"
          alt="Animation of dog walking"
          width="800"
          height="600"
        />
      </div>
      <div>
        <h3 class="text-lg font-black">Image from src assets</h3>
        <img
          :src="imgUrl"
          class="max-w-sm rounded-xl shadow-md"
          alt="Animation of dog running"
          width="800"
          height="600"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCoreStore } from '@/store/useCoreStore'
import { storeToRefs } from 'pinia'
import { useHead } from '@vueuse/head'
import { RouteName } from '@/router/RouteName'
import LeftArrowIcon from '~icons/material-symbols/arrow-left-rounded'

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
