<template>
  <div
    class="pt-16 text-white flex flex-col gap-16 items-center"
  >
    <h2 class="text-5xl">VVS</h2>
    <CommonCard :services="services" />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia"
import { usePlumberServicesStore } from "~/store/plumbing-services";

const store = usePlumberServicesStore()
const { getAllServices: services } = storeToRefs(store)

</script>