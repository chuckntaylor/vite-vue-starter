<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCoreStore } from '@/store/useCoreStore'
// Icons
import AddIcon from '~icons/material-symbols/add-rounded'
import SubtractIcon from '~icons/material-symbols/remove-rounded'

/* -----------------------------
  State
----------------------------- */
const coreStore = useCoreStore()
const { count } = storeToRefs(coreStore)
const { increment, decrement } = coreStore
</script>

<template>
  <div class="border-2 border-sky-900 rounded-lg bg-sky-700 p-6 shadow-lg shadow-sky-700/50">
    <div class="min-w-sm flex flex-row items-center gap-2 text-2xl text-sky-50 font-bold">
      <p>Count:</p>
      <span>{{ count }}</span>
    </div>
    <div class="mt-8 flex flex-row gap-4">
      <button
        type="button"
        class="inline-flex items-center gap-x-1.5 rounded-md bg-sky-300 px-3 py-2 text-sm text-sky-900 font-semibold shadow-sm hover:bg-sky-200 focus-visible:outline-2 focus-visible:outline-sky-300 focus-visible:outline-offset-2 focus-visible:outline focus:ring-2 focus:ring-offset-2 focus:ring-sky-300 focus:ring-offset-sky-700"
        @click="increment"
      >
        <span class="sr-only">Increment</span>
        <AddIcon class="h-6 w-6" aria-hidden="true" />
      </button>
      <button
        type="button"
        class="inline-flex items-center gap-x-1.5 rounded-md bg-sky-300 px-3 py-2 text-sm text-sky-900 font-semibold shadow-sm hover:bg-sky-200 focus-visible:outline-2 focus-visible:outline-sky-300 focus-visible:outline-offset-2 focus-visible:outline focus:ring-2 focus:ring-offset-2 focus:ring-sky-300 focus:ring-offset-sky-700"
        @click="decrement"
      >
        <span class="sr-only">Decrement</span>
        <SubtractIcon class="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>
