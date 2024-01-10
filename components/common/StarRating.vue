<template>
  <div class="star-rating text-4xl md:text-5xl lg:text-6xl">
    <span v-for="i in MAX_STARS" :key="i">&star;</span>
    <div class="star-rating__current" :style="{width: getRating + '%'}">
<!--      <span v-for="n in MAX_STARS" :key="n">&starf;</span>-->
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['current'])

const MAX_STARS = 5

const getRating = computed(() => (props.current / MAX_STARS) * 100)
</script>

<style scoped>
.star-rating {
  color: gold;
  display: inline-block;
  //font-size: 4em;
  position: relative;
  transform: translate(-6px);
}

.star-rating__max,
.star-rating__current {
  position: absolute;
  top: 0;
}

.star-rating__current {
  overflow: hidden;
  white-space: nowrap;
}
</style>