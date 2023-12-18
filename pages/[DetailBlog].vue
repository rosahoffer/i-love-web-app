<script setup>
const route = useRoute()
const params = route.params.DetailBlog

// Fetching data from hygraph. 
const { data } = await useFetch('https://api-eu-west-2.hygraph.com/v2/clpceledoaa4y01unccm36p1r/master', {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: {
    query: `query MyQuery {
                blog(where: {slug: "${params}"}) {
                  slug
                  title
                  date
                  introduction
                  description {
                    html
                  }
                }
              }`
    },
  })

const blog = data.value.data.blog
</script>

<template>
  <main>
    <div class="heading-title-contain">
      <h2>{{ blog.title }}<span class="sub-title">fdnd</span></h2>
    </div> 
    <div>
      <img class="purple-separator" src="@/public/img/separator-purple.svg" alt="Separator Purple">
    </div> 
      <li class="blog-date">{{ blog.date }}</li>
      <p class="blog-introduction">{{ blog.introduction }}</p>
      <div v-html="blog.description.html"></div> 
  </main>
</template>