<template>
  <div
    v-if="services.length"
    class="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
  >
    <div
      v-for="service in services"
      :key="service.id"
      class="card"
    >
      <div class="card-image">
<!--        <img v-if="!service.image" src="@/assets/images/home1_1.jpg" alt="service image">-->
        <img :src="`_nuxt/assets/images/${service.image}`" alt="service image" class="w-full h-52">
      </div>
      <div class="card-body">
        <h2 class="card-title">{{ service.name }}</h2>
        <p class="card-description">{{ service.description }}</p>
        <p class="card-description font-semibold">{{ service.paymentInfo }}</p>
      </div>
      <div class="card-actions">
        <p class="font-bold text-xl">{{ service.price }}</p>
        <button class="action-btn transition-background-color ease-in-out delay-150 duration-300">Läs mer</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { services } = defineProps({
  services: {
    type: Array,
    required: true
  }
})
</script>