<template>
  <div class="container mx-auto bg-gray-300 p-8">
    <h1 class="font-bold text-black text-4xl text-center">YouTube Video Player</h1>
    <h2 class="font-normal leading-normal text-center">
      Landing page with YouTube player
    </h2>

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
  </div>
</template>

<script>
import { defineComponent } from "vue";
import YouTube from "vue3-youtube";

export default defineComponent({
  data () {
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
