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
    src="https://www.youtube.com/embed/paDfNTq0Lbs"
    width="100%"
    height="720"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
  <!-- <YouTube
    class="mx-auto my-auto w-full h-full"
    :src="youtubeLink"
    width=100%
    height=720
    aspectRatio="16:9"
    @ready="onReady"
    ref="youtube"
  /> -->
</template>

<script>
import { defineComponent } from "vue";
import YouTube from "vue3-youtube";

export default defineComponent({
  data() {
    return {
      youtubeLink: "https://www.youtube.com/embed/paDfNTq0Lbs",
    };
  },
  components: { YouTube },
  methods: {
    onReady() {
      this.$refs.youtube.playVideo();
    },
    searchEvent(event) {
      this.youtubeLink = event.target.value;
    },
  },
});
</script>
