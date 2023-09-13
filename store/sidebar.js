import { defineStore } from 'pinia'

export const useIsSidebarOpen = defineStore('isSidebarOpen', {
  state: () => ({
    isOpen: false
  }),
  actions: {
    toggleSidebar() {
      this.isOpen = !this.isOpen
    }
  }
})