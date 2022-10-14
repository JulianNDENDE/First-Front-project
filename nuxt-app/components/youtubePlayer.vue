<template>
  <input
    type="text"
    class="search-click container mx-auto my-8 p-2"
    placeholder="search here..."
    @keydown.enter="searchEvent($event)"
    :value="youtubeLink"
  />

  <iframe
    class="mx-auto my-auto"
    :src="youtubeLink"
    width="100%"
    height="720"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</template>

<script setup>
const youtubeLink = ref("https://www.youtube.com/embed/paDfNTq0Lbs");

const searchEvent = (e) => {
  const link = e.target.value;
  if (link.includes("v=")) {
    const VideoID = link.split("v=")[1];
    youtubeLink.value = `https://www.youtube.com/embed/${VideoID}`;
  }
}
</script>
