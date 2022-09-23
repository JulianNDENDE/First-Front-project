<template>
  <div id="app">
    <h1 id="main-title">Youtube Player</h1>
    <h2 id="main-subtitle">Landing page with Youtube player</h2>

    <input
      class="input"
      type="text"
      @keydown.enter="handleSearch($event)"
      placeholder="YouTube Video Link or Video Id"
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
  </div>
</template>

<script>
export default {
  name: "App",
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
      this.youtubeLink = event.target.value;
    },
  },
};
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

#main-title {
  font-size: 30px;
  font-weight: bold;
  color: black;
  text-justify: auto;
  text-align: center;
}

#main-subtitle {
  font-size: 20px;
  color: black;
  text-justify: auto;
  text-align: center;
}

.input {
  padding: 5px;
  max-width: 720px;
  margin-top: 25px;
  margin-bottom: 25px;
  width: 90%;
}

.buttons {
  margin-top: 25px;
}
</style>
