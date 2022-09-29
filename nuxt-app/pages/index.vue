<template>
  <div class="container mx-auto bg-gray-300 p-8">
    <h1 class="font-bold text-black text-4xl text-center">YouTube Video Player</h1>
    <h2 class="font-normal leading-normal text-center">
      Landing page with YouTube player
    </h2>

    <div class="container mx-auto my-8">
      <VueYoutube />
    </div>

    <div class="container" style="padding: 50px 0 100px 0">
      <Account v-if="user" />
      <Auth v-else />
    </div>
  </div>
</template>

<script setup>
  const user = useSupabaseUser();
</script>
