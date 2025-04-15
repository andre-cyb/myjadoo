<script setup>
/*   const posts = [
    {
      titolo: 'Rinasce il settore FEMMINILE dello Scandicci!',
      data: '08-04-2025',
      descrizione: 'Marcell Ziemann',
      foto: 'https://www.scandiccicalcio.it/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-29-at-12.21.40.jpeg',
    },
    {
      titolo: 'SIAMO CAMPIONI DI ECCELLENZA 2024/2025!',
      data: '29-12-2024',
      descrizione: 'Janette Lynch',
      foto: 'https://www.scandiccicalcio.it/wp-content/uploads/2025/03/486162008_1176974961105987_1572538598385473590_n.jpg',
    },
    {
      titolo: 'Eccellenza, Lastrigiana-Scandicci 0-1!',
      data: '05-01-2025',
      descrizione: 'Connor Lopez',
      foto: 'https://www.scandiccicalcio.it/wp-content/uploads/2025/03/483524795_1170762771727206_2299440618686994219_n.jpg',
    }
  ] */
  
  
  const api = useApi()

  const { data: posts, error } = await useAsyncData('posts', async () => {
    try {
      const result = await api.get('rest/web/servizi/comunicati/areaweb/notizie/annogest/2024')
      return result
    } catch (err) {
      console.error('[API ERROR]', err)
      throw err
    }
  })


  /* const { data: posts, error } = await useAsyncData('posts', async () => {
  try {
    const result = await $fetch('http://gesosport.loc.gesosport.it/rest/web/servizi/comunicati/areaweb/notizie/annogest/2023')
    return result
  } catch (err) {
    console.error('[API ERROR]', err)
    throw err
  }
}) */
// console.log(posts)
</script>

<template>
  <section class="p-6 sm:p-20 lg:px-60 font-poppins">
    <div class="font-bold text-5xl md:text-6xl lg:text-7xl text-[#181E4B] text-center">
      <h2>Notizie</h2>
    </div>
    <div v-if="pending">Caricamento notizie...</div>
    <div v-else-if="error">Errore: {{ error.message }}</div>
    <div v-else-if="!posts.message?.length">Nessuna notizia trovata.</div>

    <newsCard
      v-for="(post, index) in posts.message"
        :key="index"
        :post="post"
    />

  </section>
</template>
