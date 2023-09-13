<template>
  <h1>Products id is {{ id }}</h1>
</template>

<script setup>
const { id } = useRoute().params
definePageMeta({
  layout: 'products'
})
</script>