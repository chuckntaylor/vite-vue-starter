<script setup lang="ts">
import { storeToRefs } from 'pinia'
// Icons
import AddIcon from '~icons/material-symbols/add-rounded'
import SubtractIcon from '~icons/material-symbols/remove-rounded'
import { useCoreStore } from '@/store/useCoreStore'

/* -----------------------------
  State
----------------------------- */
const coreStore = useCoreStore()
const { count } = storeToRefs(coreStore)
const { increment, decrement } = coreStore
</script>

<template>
  <div class="p-6 border-2 border-sky-900 rounded-lg bg-sky-700 shadow-lg shadow-sky-700/50">
    <div class="text-2xl text-sky-50 font-bold flex flex-row gap-2 min-w-sm items-center">
      <p>Count:</p>
      <span>{{ count }}</span>
    </div>
    <div class="mt-8 flex flex-row gap-4">
      <button
        type="button"
        class="text-sm text-sky-900 font-semibold px-3 py-2 rounded-md bg-sky-300 inline-flex gap-x-1.5 shadow-sm items-center focus-visible:outline-2 focus-visible:outline-sky-300 focus-visible:outline-offset-2 focus-visible:outline hover:bg-sky-200 focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-sky-700"
        @click="increment"
      >
        <span class="sr-only">Increment</span>
        <AddIcon class="h-6 w-6" aria-hidden="true" />
      </button>
      <button
        type="button"
        class="text-sm text-sky-900 font-semibold px-3 py-2 rounded-md bg-sky-300 inline-flex gap-x-1.5 shadow-sm items-center focus-visible:outline-2 focus-visible:outline-sky-300 focus-visible:outline-offset-2 focus-visible:outline hover:bg-sky-200 focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-sky-700"
        @click="decrement"
      >
        <span class="sr-only">Decrement</span>
        <SubtractIcon class="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>
