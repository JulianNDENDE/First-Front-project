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
    <h2 class="font-bold text-black">Email :</h2>
    <email-input />
  </div>

  <div class="container mx-auto bg-gray-300 p-8 my-8">
    <h2 class="font-bold text-black">Town research :</h2>
    <search-town />
  </div>
</template>

<script setup>
const user = useSupabaseUser();
</script>
