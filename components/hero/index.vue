<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const posts = [
  // 'https://www.scandiccicalcio.it/wp-content/uploads/2024/02/ECCELLENZA.jpg',
  // 'https://www.scandiccicalcio.it/wp-content/uploads/2024/03/426920014_873773601426126_5961023311083958337_n.jpg',
  // 'https://www.scandiccicalcio.it/wp-content/uploads/2024/03/426920314_873771324759687_6032484974428128830_n.jpg',
  'https://www.scandiccicalcio.it/wp-content/uploads/2024/03/426830947_873771744759645_3745765071935110766_n.jpg',
  // 'https://www.scandiccicalcio.it/wp-content/uploads/2021/07/226278897_4421069277936844_4194607209211385184_n.jpg',
]
const currentImage = ref(0)
let intervalId


const preloadImages = (sources) => {
  sources.forEach((src) => {
    const img = new Image()
    img.src = src
  })
}

onMounted(() => {
  preloadImages(posts)

  intervalId = setInterval(() => {
    currentImage.value = (currentImage.value + 1) % posts.length
  }, 5000)
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})

const goToImage = (index) => {
  currentImage.value = index
}
</script>

<template>
  <section>
    <div class="relative w-full  overflow-hidden" style="height: 75vh;" >
      <!-- Immagine attiva -->
      <transition name="fade" mode="out-in">
        <img
          :src="posts[currentImage]"
          :key="posts[currentImage]"
          class="absolute top-0 left-0 w-full h-full object-cover object-center z-10"
          alt="Slideshow"
        />
      </transition>
  
      <!-- Overlay scuro -->
      <div class="absolute top-0 left-0 w-full h-full bg-black/50 z-20"></div>
  
      <!-- Contenuto sopra -->
      <div class="absolute grid align-bottom lg:grid-cols-2 pb-20 top-0 left-0 w-full h-full z-30 flex items-end justify-center">
        <div class="text-left lg:pl-20 space-y-3 p-4 text-white" style="text-shadow: 0 0 20px black;">
          <div class="font-bold text-5xl md:text-6xl lg:text-8xl">
            Scandicci Calcio
          </div>
          <p class="uppercase font-poppins text-2xl text-[#c22727] font-bold">
            Football club dal 1908
          </p>
          <div class="flex items-center justify-center space-x-3">
            <!-- <button type="button" aria-label="Find out more"
              class="block bg-[#F1A501] text-white px-6 py-3 text-sm font-poppins rounded-md"
            >
              Find out more
            </button> -->
          </div>
        </div>
      </div>
      <!-- Pallini di navigazione -->
      <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-40 flex space-x-2">
        <button
          v-for="(img, index) in posts"
          :key="index"
          class="w-3 h-3 rounded-full"
          :class="index === currentImage ? 'bg-white' : 'bg-white/50 hover:bg-white/80'"
          @click="goToImage(index)"
        ></button>
      </div>
    </div>
    <BRow>
      
    </BRow>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
  position: absolute;
  width: 100%;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
