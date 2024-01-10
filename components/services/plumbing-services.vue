<template>
  <div
    class="pt-16 text-white flex flex-col gap-16 items-center"
  >
    <h2 class="text-5xl">VVS tjänster</h2>
    <p class="card-description font-semibold text-xl text-center">Priset är efter ROT. Bilframkörning på 250 kr tillkommer. Önskas bortforsling tillkommer 350 kr.</p>
    <CommonCard :services="services" />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia"
import { usePlumberServicesStore } from "~/store/plumbing-services";

const store = usePlumberServicesStore()
const { getAllServices: services } = storeToRefs(store)

</script>