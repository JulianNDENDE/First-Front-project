<template>
  <input
    type="text"
    v-model="emailRef"
    class="search-click check-email container mx-auto my-2 p-2"
    placeholder="Enter your email here..."
  />
  <p class="text-red-500" v-if="!isValidEmail(emailRef)">Please enter a valid email</p>
</template>

<script setup>
  const emailRegex = /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/;
  const emailRef = useEmail();
  const isValidEmail = (emailRef) => {
    if (emailRef === "") {
      return true;
    } else {
      return emailRegex.test(emailRef);
    }
  }
</script>
