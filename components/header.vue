<template>
  <div>
    <header class="shadow-sm bg-gray-500">
      <nav class="md:container mx-auto flex justify-between items-center">
        <NuxtLink to="/" class="header-links">
          <img src="@/assets/images/logo.jpg" alt="logo" class="w-52 h-24">
        </NuxtLink>
        <ul class="hidden lg:flex gap-4">
          <li
            v-for="m in menu"
            :key="m.path"
          >
            <NuxtLink :to="m.path" class="header-links">{{ m.title }}</NuxtLink>
          </li>
        </ul>
        <CustomBurger @click="toggleSideMenu" />
        <HomeMobileSideMenu />
      </nav>
    </header>
  </div>
</template>

<script setup>
import menu from "../enums/menu"
const store = useIsSidebarOpen()
const toggleSideMenu = () => store.toggleSidebar()
</script>

<style scoped>
.router-link-exact-active {
  color: #1bbde8;
}
</style>