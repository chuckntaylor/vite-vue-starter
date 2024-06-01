<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { RouteName } from '@/router/RouteName'
import Counter from '@/components/Counter.vue'
import RightArrowIcon from '~icons/material-symbols/arrow-right-rounded'
/* -----------------------------
  Head Customization
----------------------------- */
useHead({
  title: 'Page 1',
})
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-8">
    <h1 class="text-5xl text-sky-950 font-black font-mont">
      PAGE 1
    </h1>
    <Counter />
    <router-link
      class="flex items-center text-lg font-black underline underline-offset-2"
      :to="{ name: RouteName.page2 }"
    >
      <span>Go to Page 2</span><RightArrowIcon class="h-6 w-6" />
    </router-link>
  </div>
</template>
