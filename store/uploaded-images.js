import { defineStore } from "pinia"

export const useUploadedImages = defineStore('uploadedImages', {
  state: () => ({
    files: []
  }),
  getters: {
    getCount: (state) => state.files.length,
    getFiles: (state) => state.files
  },
  actions: {
    setFiles(files) {
      this.files = files
    }
  }
})