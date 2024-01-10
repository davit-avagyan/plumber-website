<template>
  <div
    v-if="isOpen"
    class="lg:hidden absolute left-0 top-0 right-0 bottom-0 grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 z-10"
    @click="toggleSideMenu"
  >
    <Transition>
      <div class="bg-side-main-bg flex flex-col">
        <div>
          <div class="flex flex-col">
            <NuxtLink
              v-for="m in menu"
              :key="m.path"
              :to="m.path"
              class="py-4 px-10 text-sm text-white font-semibold hover:bg-side-main-bg-hover hover:text-main border-b-2 border-side-main-bg-hover"
            >{{ m.title }}</NuxtLink>
            <button
              @click="openModal"
              class="mt-2 header-links bg-[#3c414c] rounded-xl py-2 px-4 text-white uppercase font-semibold text-center transition-background-color ease-in-out delay-150 duration-300 hover:bg-black"
            >
              Gratis offert
            </button>
          </div>
          <div class="pt-5">
            <div class="contact-info-side-menu">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
              </svg>
              <span class="text-xs">{{ contact.address }}</span>
            </div>
            <div class="contact-info-side-menu">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path>
              </svg>
              <NuxtLink class="text-xs" :to="`tel:${contact.phone}`">{{ contact.phone }}</NuxtLink>
            </div>
            <div class="contact-info-side-menu">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path>
              </svg>
              <NuxtLink :to="`mailto:${contact.email}`">{{contact.email}}</NuxtLink>
            </div>
            <div class="contact-info-side-menu">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span class="text-xs">{{ contact.workingDays }} {{ contact.workingHours }}</span>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
  <ModalsFormForOrder v-if="modalOpen" @close="closeModal" />
</template>

<script setup>
import { storeToRefs } from 'pinia'
import menu from "../../enums/menu"
import contact from "../../enums/contact";

const route = useRoute()

const store = useIsSidebarOpen()
const { isOpen } = storeToRefs(store)
const toggleSideMenu = () => store.toggleSidebar()

const modalOpen = ref(false)

const openModal = service => {
  modalOpen.value = true
}

const closeModal = () => {
  modalOpen.value = false
}

</script>

<style scoped>
.router-link-exact-active {
  background-color: #809494;
  color: #fff;
}
</style>