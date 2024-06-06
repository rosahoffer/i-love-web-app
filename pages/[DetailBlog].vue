<script setup>
import ContactForm from '../components/ContactForm.vue';
import Reactions from '../components/Reactions.vue';

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
  <main class="contain-detail-page fade-in-left">
    <div>
      <h2>{{ blog.title }}<span class="sub-title">fdnd</span></h2>
    </div>
    <div class="separator">
      <img class="purple-separator" src="/img/separator-purple.svg" alt="Separator Purple">
    </div>
    <li class="blog-date">{{ blog.date }}</li>
    <div class="blog-text">
      <p class="blog-introduction">{{ blog.introduction }}</p>
      <div v-html="blog.description.html"></div>
    </div>
    <NuxtLink class="primary-button" to="/">back to overview</NuxtLink>
    <div>
      <ContactForm />
      <Reactions />
    </div>
  </main>
</template>

<style>
h3{
  margin: 2rem 0;
}
</style>
