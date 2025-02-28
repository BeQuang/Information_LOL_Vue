import { defineStore } from 'pinia'
import { reactive, watch } from 'vue'
import { Dark } from 'quasar'

export const useStoreSettings = defineStore('settings', () => {
  const settings = reactive({
    promptToDelete: true,
    currentcySymbol: '$',
    darkMode: false,
  })

  watch(
    () => settings.darkMode,
    (darkMode) => {
      Dark.set(darkMode)
    },
  )

  return { settings }
})
