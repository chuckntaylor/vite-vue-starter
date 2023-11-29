import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCoreStore = defineStore('coreStore', () => {
  /* -----------------------------
    STATE
  ----------------------------- */
  const count = ref(0)
  /* -----------------------------
    COMPUTED STATE
  ----------------------------- */
  /* -----------------------------
    METHODS
  ----------------------------- */
  const increment = () => {
    count.value++
  }

  const decrement = () => {
    if (count.value > 0) {
      count.value--
    }
  }
  /* -----------------------------
    RETURNS
  ----------------------------- */
  return {
    // State
    count,
    // Methods
    increment,
    decrement,
  }
})
