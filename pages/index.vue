<script setup>
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
console.log("Parsed blogs:", blogs); // Controleer of blogs correct worden opgehaald
</script>

<template>
  <main>
    <div class="heading-title-contain">
      <h1>Best Of This Week<span class="sub-title">fdnd</span></h1>
    </div> 
    <div>
      <img class="purple-separator" src="@/static/images/separator-purple.svg" alt="Separator Purple">
    </div> 
    <article class="blog-post" v-if="blogs && blogs.length > 0">
      <div class="image-container">
        <NuxtLink to="/DetailBlog">
          <img v-if="blogs[0].thumbnail" :src="blogs[0].thumbnail.url" alt="Image Design System">
        </NuxtLink>  
      </div>
        <h3>{{ blogs[0].title }}</h3>
        <p class="blog-date">{{ blogs[0].date }}</p>
    </article>
    <NuxtLink to="/AllPosts">see all posts</NuxtLink>
    <div>
      <img class="purple-separator" src="@/static/images/separator-purple.svg" alt="Separator Purple">
    </div>
    <NuxtLink to="/CreateBlog">create a new blog</NuxtLink>
  </main>
</template>