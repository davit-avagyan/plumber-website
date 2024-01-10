<template>
  <label :for="id" class="block h-64 relative overflow-hidden rounded">
    <input
      :id="id"
      type="file"
      class="overlayed"
      :multiple="true"
      @change="handleUpload"
    />
    <span
      class="overlayed bg-gray-400 border-gray-400 border-2 text-gray-800 pointer-events-none flex justify-center items-center"
    >
      <div class="text-center">
        <slot>
          <strong>Ladda upp bild</strong>
        </slot>
        <small v-if="files.length" class="text-gray-600 block">
          <slot name="file" :files="files" :uploadInfo="uploadInfo">
            {{ uploadInfo }}
          </slot>
        </small>
      </div>
    </span>
  </label>
  <div
    v-if="preview_list.length"
    class="flex flex-col gap-4 mt-8 "
  >
    <div
      v-for="preview_item in preview_list"
      :key="preview_item"
      class="flex flex-col gap-4 md:flex-row justify-between items-center bg-indigo-300 p-5 rounded-md shadow-md"
    >
      <img class="w-28 h-28" :src="preview_item.preview" alt="uploaded image">
      <button
        class="bg-red-500 px-5 py-3 rounded-md text-black hover:bg-red-950 hover:text-white"
        type="button"
        @click="removeImage(preview_item)"
      >
        Remove
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const { id } = defineProps({
  id: { type: String, default: 'drag-and-drop-input' },
})

const emit = defineEmits(['input'])

const files = ref([])
const preview_list = ref([])

const uploadInfo = computed(() => {
  return files.value.length === 1
    ? files.value[0].name
    : `${files.value.length} files selected`
})

const multipleUpload = (e) => {
  const input = e.target
  let count = input.files.length;
  let index = 0;
  if (input.files) {
    while(count --) {
      const obj = {}
      const reader = new FileReader();
      reader.onload = (e) => {
        obj.preview = e.target.result
        preview_list.value.push(obj);
      }
      obj.file = input.files[index]
      reader.readAsDataURL(input.files[index])
      index ++;
    }
  }
}

const handleUpload = (e) => {
  files.value = Array.from(e.target.files) || []
  multipleUpload(e)
  emit('input', preview_list.value || [])
}

const removeImage = item => {
  files.value = files.value.filter(f => f !== item.file)
  preview_list.value = preview_list.value.filter(pl => pl !== item)
  emit('input', preview_list.value || [])
}
</script>

<style>
.overlayed {
  @apply absolute top-0 left-0 right-0 bottom-0 w-full block;
}
</style>