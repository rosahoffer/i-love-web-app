<script setup>
    // Fetching data from hygraph. 
    const { data } = await useFetch('https://api-eu-west-2.hygraph.com/v2/clpceledoaa4y01unccm36p1r/master', {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: {
        query: `query Homepages {
                homepages {
                  createdAt
                  id
                  publishedAt
                  titleHomepage
                  updatedAt
                }
              }`
    },
})

const homepages = await data.value.data.homepages
console.log("Parsed homepages:", homepages); // Controleer of homepages correct worden opgehaald

import MainNav from '/src/components/MainNav.vue';

</script>

<template>
  <main>
    <MainNav />
    <div>
      <h1 v-for="homepage in homepages" :key="homepage.id">{{ homepage.titleHomepage }}</h1>
      <span class="sub-title">fdnd</span>
    </div>  
    <img class="purple-separator" src="@/static/images/separator-purple.svg" alt="Separator Purple">
    <nuxt-link to="/">
          <img src="@/static/images/design-system.jpg" alt="Image Design System">
    </nuxt-link>
  </main>

</template>