import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTestStore = defineStore(
  'test',
  () => {
    const testText = ref<string | undefined>('test')

    const setTestText = (val: string) => {
      testText.value = val
    }

    const clearTestText = () => {
      testText.value = undefined
    }

    return {
      testText,
      setTestText,
      clearTestText
    }
  },
  {
    persist: {
      storage: {
        setItem(key, value) {
          uni.setStorageSync(key, value)
        },
        getItem(key) {
          return uni.getStorageSync(key)
        }
      }
    }
  }
)
