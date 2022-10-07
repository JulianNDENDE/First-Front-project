<template>
  <input
    type="email"
    class="search-click container mx-auto my-2 p-2"
    placeholder="Enter your email here..."
    required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
    @keydown.enter="validEmail($event)"
  />
</template>

<script>
export default {
  methods: {
    validEmail(event) {
      const email = event.target.value;
      const emailRegex = /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/;
      if (emailRegex.test(email)) {
        alert("Valid Email");
      } else {
        alert("Invalid Email");
      }
    },
  },
};
</script>
