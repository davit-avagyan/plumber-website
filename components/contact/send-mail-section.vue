<template>
  <div class="container mx-auto my-7">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ContactGeneralInformationSection />
      <div v-if="true" class="text-white font-semibold text-center">
        Kontaktformuläret är under förberedelse! <br>
        Nu kan du kontakta via e-post eller telefonnummer. <br>
        Vi ber om din förlåtelse!
      </div>
      <ContactMailFormSection v-else />
    </div>
  </div>
</template>

<script setup>

</script>