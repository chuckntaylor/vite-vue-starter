<script setup lang="ts">
import { useHead } from '@vueuse/head'
import RightArrowIcon from '~icons/material-symbols/arrow-right-rounded'
import Counter from '@/components/Counter.vue'
import { RouteName } from '@/router/RouteName'
/* -----------------------------
  Head Customization
----------------------------- */
useHead({
  title: 'Page 1',
})
</script>

<template>
  <div class="flex flex-col gap-8 items-center justify-center">
    <h1 class="text-5xl text-sky-950 font-black font-mont">
      PAGE 1
    </h1>
    <Counter />
    <router-link
      class="text-lg font-black underline underline-offset-2 flex items-center"
      :to="{ name: RouteName.page2 }"
    >
      <span>Go to Page 2</span><RightArrowIcon class="h-6 w-6" />
    </router-link>
  </div>
</template>
