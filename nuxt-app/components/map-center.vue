<template>
  <iframe
    id="map"
    class="container margin-auto mx-auto my-2"
    :src="src"
    frameborder="0"
    style="border: 0"
    allowfullscreen
  />
</template>

<script setup>
const data = [
  {
    id: 1,
    name: "Hôpital Saint-Antoine",
    city: "Paris",
    adress: "184 Rue du Faubourg Saint-Antoine",
  },
  {
    id: 2,
    name: "Hôpital Saint-Anne",
    city: "Paris",
    adress: "1 Rue Cabanis",
  },
  {
    id: 3,
    name: "Hôpital Pitié-Salpétrière",
    city: "Paris",
    adress: "47-83 Bd de l'Hôpital",
  },
  {
    id: 4,
    name: "Hôpital Européen Georges Pompidou",
    city: "Paris",
    adress: "20 Rue Leblanc",
  },
  {
    id: 5,
    name: "Hôpital Ambroise-Paré",
    city: "Boulogne-Billancourt",
    adress: "9 avenue Charles de Gaulle",
  },
];
var src = `https://www.google.com/maps/embed/v1/place?key=${"API_KEY"}&region=fr&zoom=12`;
// for each hospital in data, add a marker on the map
for (const hospital of data) {
  src += `&q=${hospital.adress}+${hospital.city}`;
}
</script>
