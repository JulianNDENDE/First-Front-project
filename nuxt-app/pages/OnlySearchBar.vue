<template>
  <div class="container mx-auto bg-gray-300 p-8 my-8 w-full h-full">
    <h1 class="font-bold text-black text-4xl text-center">OnlySearchBar page</h1>
    <router-link to="/">
      <button
        id="toHome"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto my-auto"
      >
        Home page
      </button>
    </router-link>
  </div>

  <div>
    <onlysearchbar />
  </div>
</template>
