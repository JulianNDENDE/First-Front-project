<template>
  <input
    type="text"
    v-model="urlRef"
    class="search-click my-2 p-2 rounded-lg"
    placeholder="Enter a url"
  />
  <p class="text-red-500" v-if="!isValidUrl(urlRef)">Please enter a valid url</p>
</template>

<script setup>
const regex = /^(http|https):\/\/+[\www\d]+\.[\w]+(\/[\w\d]+)?/;
const urlRef = useUrl();
const isValidUrl = (urlRef) => {
  if (urlRef === "") {
    return true;
  } else {
    return regex.test(urlRef);
  }
};
</script>
