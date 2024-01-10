<template>
  <h2 class="text-xl sm:text-3xl lg:text-5xl text-center text-gray-200">Vad tycker folk om oss</h2>
  <div id="reviews" class="container mx-auto my-7 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 text-white px-4">
    <div
      v-for="review in reviews"
      :key="review.id"
      class="review-card bg-gray-200 text-gray-800 shadow-2xl rounded overflow-hidden p-5"
    >
      <div class="review-card-content">
        <div class="media-content md:min-h-[140px] xl:min-h-[176px]">
          <p class="title is-4 text-xl font-bold">{{ review.name }}</p>
          <p class="subtitle is-6 font-semibold">{{ review.message }}</p>
        </div>
        <CommonStarRating :current="review.rate" />
      </div>
    </div>

  </div>
  <NuxtLink
    to="https://www.google.com/search?sca_esv=592607226&rlz=1C1SQJL_svSE815SE815&sxsrf=AM9HkKkrNCO22rwE2I7IKdYyY8Q880tgog:1703102544546&q=am+vvs+och+bygg+ab&uds=AMIYvT8ZjN_K7tvG2_x4Jg6g3F7TfGV79_BKGzuMEE72HEastJf0Wb2otXBC9aEBazhFGxug5UZOMWtxPzONOq-mXyZl1blp5RQbBn8RWCYrImyzNXxXfitgJxnq6IS6J46I_WJD-6jl&si=ALGXSlb9ylv6FQuI8zCROKWgJkMHV_7qC6_qVQjaGVH5mNU2SfoBIch9Av48LmNl-WdUFISvozaYVXkorYgd5WoZKh4V6FqjGXNPFMk9zxFTJEKhxZW34sY%3D&sa=X&ved=2ahUKEwjG2Lux556DAxV6JhAIHfQzB_sQ3PALegQIEhAE&cshid=1703102620875019&biw=1706&bih=817&dpr=1.88"
    target="_blank"
    class="text-center w-fit mx-auto mb-5 text-white uppercase border border-white rounded-md px-10 py-2 font-bold transition-background-color ease-in-out delay-150 duration-300 hover:bg-[#3c414c] hover:border-[#3c414c]"
  >
    Se alla recensioner
  </NuxtLink>
</template>

<script setup>
import reviews from "~/enums/reviews"
</script>

<style scoped>

</style>
