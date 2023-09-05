// Utilities
import { defineStore } from 'pinia'

export const useBreakpointsStore = defineStore('breakpoints', {
  state: () => ({
    screenSize: window.innerWidth
  }),

  actions: {
    setScreenSize(newSize) {
      this.screenSize = newSize
    },

    startResizeListener() {
      this.handleSize = () =>  {
        this.setScreenSize(window.innerWidth)
      },
      window.addEventListener('resize', this.handleSize)
    },

    stopResizeListener() {
      window.removeEventListener('resize', this.handleSize)
    }
  },

  created() {
    this.startResizeListener()
  },

  beforeUnmount() {
    this.stopReciseListener()
  }
})
