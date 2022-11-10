<template>
  <label class="block text-sm w-full font-medium text-gray-700">
    <input
      type="text"
      ref="streetRef"
      placeholder="Recherchez une ville..."
      class="search-click mt-1 w-full text-sm placeholder-gray-400 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
    />
  </label>
</template>

<script setup>
const streetRef = useStreet();
onMounted(async () => {
  streetRef.value.value = "";
  await useScript(
    "https://maps.googleapis.com/maps/api/js?key=API_KEY&libraries=places&language=fr&region=FR"
  );
  // locationrestriction to france only
  const options = {
    componentRestrictions: { country: "fr" },
  };
  const autocomplete = new google.maps.places.Autocomplete(
    streetRef.value,
    options
  );
  autocomplete.addListener("place_changed", () => {
    const place = autocomplete.getPlace();
    console.log(place);
  });
});
</script>
