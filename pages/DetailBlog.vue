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
        <section v-if="blogs && blogs.length > 0">
            <h2>{{ blogs[0].title }}</h2>
            <span class="sub-title">fdnd</span>
            <div>
                <img class="purple-separator" src="@/static/images/separator-purple.svg" alt="Separator Purple">
            </div>
            <p class="blog-date">{{ blogs[0].date }}</p>
            <p>{{ blogs[0].introduction }}</p>
            <p>{{ blogs[0].description.text }}</p>
        </section>
    </main>
</template>