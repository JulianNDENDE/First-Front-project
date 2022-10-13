<template>
  <input
    type="email"
    class="search-click check-email container mx-auto my-2 p-2"
    placeholder="Enter your email here..."
    required pattern="^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$"
    @keydown.enter="validEmail($event)"
  />
  <!-- <p class="text-green-500" v-if="validEmail">Valid Email</p>
  <p class="text-red-500" v-else>Invalid Email</p> -->
</template>

<script>
export default {
  methods: {
    validEmail(event) {
      const email = event.target.value;
      const emailRegex = /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/;
      if (email == "") return false;
      return emailRegex.test(email);
    },
  },
};
</script>
