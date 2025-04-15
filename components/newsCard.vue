<template>
    <div class="flex justify-center flex-col md:flex-row gap-6 mt-20">
      <img
        :src="post.foto"
        alt="Blog image"
        class="w-full md:w-[450px] h-[250px] object-cover rounded-lg shadow-md"
      />
      <div class="my-auto md:w-[500px]">
        <p class="text-sm text-blue-600 uppercase font-semibold">{{ post.data }}</p>
        <h2 class="text-4xl font-semibold my-3">{{ post.titolo }}</h2>
        <p class="text-gray-500 text-sm mt-1">
            {{ post.descrizione }}
        </p>
      </div>
    </div>
    
  </template>
  
  <script setup>
  defineProps({
    post: Object
  })
  </script>
  