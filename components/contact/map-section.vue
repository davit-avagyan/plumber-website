<template>
  <div class="md:block mx-auto mt-5 text-white w-full">
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Hornsgatan 79, 118 49 Stockholm&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        <a href="https://connectionsgame.org/">Connections NYT</a></div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.mapouter {
  position: relative;
  text-align: right;
  width: 100%;
  height: 400px;
}

.gmap_canvas {
  overflow: hidden;
  background: none !important;
  width: 100%;
  height: 400px;
}

.gmap_iframe {
  height: 400px !important;
}
</style>