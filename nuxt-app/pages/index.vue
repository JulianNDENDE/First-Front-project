<template>
  <div class="container mx-auto bg-gray-300 p-8 my-8 w-full h-full">
    <h1 class="font-bold text-black text-4xl text-center">YouTube Video Player</h1>
    <h2 class="font-normal leading-normal text-center">
      Landing page with YouTube player
    </h2>

    <div class="container mx-auto my-auto">
      <youtubePlayer />
    </div>
  </div>

  <div class="container mx-auto bg-gray-300 p-8 my-8">
    <h1 class="font-bold text-black text-4xl text-center">SupaBase Login</h1>
    <Account v-if="user" />
    <Auth v-else />
  </div>

  <div class="container mx-auto bg-gray-300 p-8 my-8">
    <h1 class="font-bold text-black text-4xl text-center">Input field Control</h1>
    <router-link to="/control">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Control page
      </button>
    </router-link>
  </div>

  <div class="container mx-auto bg-gray-300 p-8 my-8">
    <h1 class="font-bold text-black text-4xl text-center">Town research tools</h1>
    <router-link to="/town">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Town page
      </button>
    </router-link>
  </div>

  <div class="container mx-auto bg-gray-300 p-8 my-8">
    <h1 class="font-bold text-black text-4xl text-center">Date picker</h1>
    <h2 class="font-bold text-black">Date picker :</h2>
    <datePicker />
  </div>

  <div class="container mx-auto bg-gray-300 p-8 my-8">
    <h1 class="font-bold text-black text-4xl text-center">Share buttons</h1>
    <h2 class="font-bold text-black">Twitter and Facebook</h2>
    <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.youtube.com/embed/paDfNTq0Lbs" target="_blank"> Share </a>
    <a href="https://twitter.com/intent/tweet?url=https://www.youtube.com/embed/paDfNTq0Lbs" target="_blank"> Tweet </a>
  </div>
</template>

<script setup>
const user = useSupabaseUser();
</script>
