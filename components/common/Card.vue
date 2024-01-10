<template>
  <div
    v-if="services.length"
    class="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:px-4"
  >
    <div
      v-for="service in services"
      :key="service.id"
      class="card"
    >
      <div class="card-image">
        <img :src="service.image" alt="service image" class="w-full h-60">
      </div>
      <div class="card-body">
        <h2 class="card-title">{{ service.name }}</h2>
        <p
          class="card-description"
        >
          {{ service.description }}
        </p>
      </div>
      <div class="card-actions">
        <p v-if="service.price" class="font-bold text-xl">{{ service.price }}</p>
        <button
          @click="openModal(service)"
          class="action-btn transition-background-color ease-in-out delay-150 duration-300"
        >
          Boka
        </button>
      </div>
    </div>
  </div>
  <ModalsFormForOrder v-if="modalOpen" :service="serviceForModal" @close="closeModal" />
</template>

<script setup>
const {services} = defineProps({
  services: {
    type: Array,
    required: true
  }
})

const modalOpen = ref(false)
const serviceForModal = ref({})

const openModal = service => {
  modalOpen.value = true
  serviceForModal.value = service
}

const closeModal = () => {
  modalOpen.value = false
  serviceForModal.value = {}
}
</script>