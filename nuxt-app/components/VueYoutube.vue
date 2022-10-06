<template>
  <input
    type="text"
    class="search-click container mx-auto my-8 p-2"
    placeholder="search here..."
    @keydown.enter="searchEvent($event)"
    :value="youtubeLink"
  />

  <YouTube
    class="mx-auto my-auto w-full h-full"
    :src="youtubeLink"
    width=100%
    height=720
    aspectRatio="16:9"
    @ready="onReady"
    ref="youtube"
  />
</template>

<script>
import { defineComponent } from "vue";
import YouTube from "vue3-youtube";

export default defineComponent({
  data() {
    return {
      youtubeLink: "https://youtu.be/tQG6jYy9xto",
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
