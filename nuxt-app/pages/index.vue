<template>
  <div class="container mx-auto bg-gray-300 p-8">
    <h1 class="font-bold text-black text-4xl text-center">YouTube Video Player</h1>
    <h2 class="font-normal leading-normal text-center">
      Landing page with YouTube player
    </h2>
  </div>
  <input
    class="input"
    type="text"
    @keydown.enter="handleSearch($event, 'youtube')"
    placeholder="Youtube Video Link or Video Id"
    :value="youtubeLink"
  />

  <LazyYoutube
    ref="youtubeLazyVideo"
    :src="youtubeLink"
    max-width="720px"
    aspect-ratio="16:9"
    thumbnail-quality="standard"
  />
  <div class="buttons">
    <button @click="handleClick('playVideo', 'youtubeLazyVideo')">Play</button>
    <button @click="handleClick('stopVideo', 'youtubeLazyVideo')">Stop</button>
    <button @click="handleClick('pauseVideo', 'youtubeLazyVideo')">Pause</button>
    <button @click="handleClick('resetView', 'youtubeLazyVideo')">Reset</button>
  </div>
</template>

<script>
export default {
  name: "lazyVideo",
  data() {
    return {
      youtubeLink: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
    };
  },
  methods: {
    handleClick(event, ref) {
      this.$refs[ref][event]();
    },
    handleSearch(event) {
      if (platform === "youtube") this.youtubeLink = event.target.value;
    },
  },
};
</script>
