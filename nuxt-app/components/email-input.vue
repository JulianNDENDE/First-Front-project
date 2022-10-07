<template>
  <input
    type="email"
    class="search-click container mx-auto my-2 p-2"
    placeholder="Enter your email here..."
    required pattern="^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$"
    @keydown.enter="validEmail($event)"
  />
</template>

<script>
export default {
  methods: {
    validEmail(event) {
      const email = event.target.value;
      const emailRegex = /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/;
      return emailRegex.test(email);
    },
  },
};
</script>
