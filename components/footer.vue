<template>
  <div>
    <footer class="shadow-sm bg-[#3c414c] py-24 text-2xl">
      <div class="md:container mx-auto grid  md:grid-cols-5 sm:grid-cols-2 xs:grid-cols-1 xs:px-5 gap-x-16">
        <div class="flex col-span-1 md:col-span-2 flex-col lg:flex-row">
          <div class="flex flex-col">
            <p class="footer-section-titles">Om oss</p>
            <NuxtLink to="/" class="">
              <img src="../assets/images/logo-last.jpg" alt="logo" class="w-52 h-24">
            </NuxtLink>
            <p class="footer-section-content">{{ contact.address }}</p>
            <NuxtLink :to="`mailto:${contact.email}`" class="footer-section-content hover:text-main">{{ contact.email }}</NuxtLink>
            <NuxtLink :to="`tel:${contact.phone}`" class="footer-section-content hover:text-main">{{ contact.phone }}</NuxtLink>
          </div>
          <div class="">
            <div class="flex flex-col">
              <p class="footer-section-titles">Certifieringar</p>
              <div class="flex flex-col md:flex-row gap-4">
                <img src="@/assets/images/logo-1.png" class="w-[100px] h-[100px] rounded-full" alt="certificate logo">
                <img src="@/assets/images/id-06-logo.jpg" class="w-[100px] h-[100px] rounded-lg" alt="certificate logo">
              </div>
            </div>
            <div class="flex flex-col">
<!--              <p class="footer-section-titles">Trygg Hansa Försäkrar</p>-->
              <img src="@/assets/images/Trygg-Hansa-Logo.png" class="w-[200px] h-[100px] rounded-md" alt="Trygg-Hansa-Logo">
            </div>
          </div>
        </div>
        <div class="flex flex-col col-span-1 md:col-span-3 md:pl-5">
          <p class="footer-section-titles">Offertförfrågan</p>
          <p class="footer-section-content">För att få en kostnadsfri hembesök eller om du har några funderingar eller frågor, är du välkommen att kontakta oss på telefonnummer <NuxtLink :to="`tel:${contact.phone}`"  class="hover:text-main text-gray-400">{{ contact.phone }}</NuxtLink> eller fylla i vårt formulär nedan. Vi svarar alltid snabbt!</p>
          <p class="footer-section-content">
            <NuxtLink to="/contact-us" class="hover:text-main text-gray-400">Klicka bara här </NuxtLink>
            för förfrågan.
          </p>
        </div>
        <div class="flex flex-col sm:col-span-2">
          <p class="footer-section-titles">Karriär</p>
          <p class="footer-section-content">Om du vill jobba hos oss vänligen skicka ditt CV till <strong><NuxtLink :to="`mailto:${contact.email}`" class="hover:text-main text-gray-400">{{ contact.email }}</NuxtLink></strong></p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import contact from "../enums/contact";
</script>