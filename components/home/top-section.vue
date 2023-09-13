<template>
  <div class="top-section flex flex-col items-center text-white gap-4 relative text-center">
    <img src="../../assets/images/logo-1.png" class="w-[100px] h-[100px] absolute right-5 bottom-5 rounded-full">
    <span class="text-sm">amvvsbygg</span>
    <h1 class="text-2xl md:text-5xl uppercase">Våra erfarna medarbetare är vår garanti på ett väl utfört arbete.</h1>
<!--    <h2 class="text-2xl md:text-5xl">our team is ready for it</h2>-->
    <div class="flex flex-col md:flex-row gap-4 mt-5 md:mt-10">
      <NuxtLink to="/services" class="uppercase border border-white rounded-md px-10 py-2 font-bold transition-background-color ease-in-out delay-150 duration-300 hover:bg-[#3c414c] hover:border-[#3c414c]">Tjänster</NuxtLink>
      <NuxtLink to="/about" class="uppercase border border-white rounded-md px-10 py-2 font-bold bg-white text-[#3c414c] transition-background-color ease-in-out delay-150 duration-300 hover:text-white hover:bg-[#3c414c] hover:border-[#3c414c]">Vilka vi är</NuxtLink>
    </div>
  </div>
</template>