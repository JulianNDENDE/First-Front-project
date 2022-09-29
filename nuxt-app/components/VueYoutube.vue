<template>
  <input
    type="text"
    class="search-click container mx-auto my-8 p-2"
    placeholder="search here..."
    @keydown.enter="searchEvent($event)"
    :value="youtubeLink"
  />

  <YouTube
    class="container mx-auto my-8"
    :src="youtubeLink"
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
