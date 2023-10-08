<template>
  <div
    class="pt-16 text-white flex flex-col gap-16 items-center"
  >
    <h2 class="text-5xl">BYGG tjänster</h2>
    <CommonCard :services="services" />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia"
import { useConstructingServicesStore } from "~/store/construction-services";

const store = useConstructingServicesStore()
const { getAllServices: services } = storeToRefs(store)
</script>