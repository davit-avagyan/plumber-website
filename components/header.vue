<template>
  <div>
    <header class="shadow-sm bg-gray-500 px-4">
      <nav class="md:container mx-auto flex justify-between items-center">
        <div class="flex items-center gap-4">
          <NuxtLink to="/" class="header-links">
            <img src="../assets/images/logo-last.jpg" alt="logo" class="w-52 h-24">
          </NuxtLink>
          <img src="@/assets/images/logo-1.png" class="w-[80px] h-[80px] rounded-full" alt="certificate logo">
        </div>
        <ul class="hidden lg:flex gap-4 items-center">
          <li
            v-for="m in menu"
            :key="m.path"
          >
            <NuxtLink :to="m.path" class="header-links">{{ m.title }}</NuxtLink>
          </li>
          <button
            @click="openModal"
            class="header-links bg-[#3c414c] rounded-xl py-2 px-4 text-white uppercase font-semibold text-center transition-background-color ease-in-out delay-150 duration-300 hover:bg-black"
          >
            Gratis offert
          </button>
        </ul>
        <CustomBurger @click="toggleSideMenu" />
        <HomeMobileSideMenu />
      </nav>
    </header>
  </div>
  <ModalsFormForOrder v-if="modalOpen" @close="closeModal" />
</template>

<script setup>
import menu from "../enums/menu"
const store = useIsSidebarOpen()
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
  color: #242525;
}
</style>