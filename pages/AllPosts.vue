<script setup>

import '@/assets/styles/global.css'


// Fetching data from hygraph. 
const { data } = await useFetch('https://api-eu-west-2.hygraph.com/v2/clpceledoaa4y01unccm36p1r/master', {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: {
        query: `query Blogs {
                blogs {
                  id
                  publishedAt
                  updatedAt
                  title
                  date
                  introduction
                  slug
                  thumbnail {
                    height
                    width
                    url
                  }
                  description {
                    text
                  }
                }
              }`
    },
})

const blogs = await data.value.data.blogs
console.log(blogs); // Controleer of blogs correct worden opgehaald

</script>

<template>
    <main>
        <div class="heading-title-contain">
            <h2>All Posts<span class="sub-title">fdnd</span></h2>
        </div>
        <div>
            <img class="purple-separator" src="@/assets/images/separator-purple.svg" alt="Separator Purple">
        </div>
        <div v-if="blogs && blogs.length > 0">
            <article class="blog-post" v-for="blog in blogs">
                <div class="image-container">
                    <NuxtLink :to= "blog.slug">
                        <img v-if="blog.thumbnail" :src="blog.thumbnail.url" :alt="blog.title">
                    </NuxtLink>
                </div>
                <h3>{{ blog.title }}</h3>
                <li class="blog-date">{{ blog.date }}</li>
            </article>
        </div>
        <NuxtLink class="tertiary-button" to="/">back</NuxtLink>
    </main>
</template>

<style scoped>
.tertiary-button {
    margin: 3rem 0rem;
}
</style>