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
console.log(blogs); // Controleer of blogs correct worden opgehaald

</script>

<template>
    <main>
        <div class="heading-title-contain">
            <h2>All Posts<span class="sub-title">fdnd</span></h2>
            <img class="purple-separator" src="/img/separator-purple.svg" alt="Separator Purple">
        </div>

        <div class="blogs-contain" v-if="blogs && blogs.length > 0">
            <div class="blog-grid">
                <article class="blog-post main-blog" v-if="blogs.length > 0" :key="blogs[0].id">
                    <div class="image-container">
                        <NuxtLink :to="blogs[0].slug">
                            <img v-if="blogs[0].thumbnail" :src="blogs[0].thumbnail.url" :alt="blogs[0].title">
                        </NuxtLink>
                    </div>
                    <h3>{{ blogs[0].title }}</h3>
                    <li class="blog-date">{{ blogs[0].date }}</li>
                </article>

                <article class="blog-post small-blog" v-for="blog in blogs.slice(1)" :key="blog.id">
                    <div class="image-container">
                        <NuxtLink :to="blog.slug">
                            <img v-if="blog.thumbnail" :src="blog.thumbnail.url" :alt="blog.title">
                        </NuxtLink>
                    </div>
                    <h3>{{ blog.title }}</h3>
                    <li class="blog-date">{{ blog.date }}</li>
                </article>
            </div>
        </div>


        <NuxtLink class="tertiary-button" to="/">back</NuxtLink>
    </main>
</template>

<style scoped>
.blog-post {
    margin-top: 3rem;
}

.tertiary-button {
    margin: 3rem 0rem;
}

@media (min-width: 90rem) {

    .blog-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr; /* Drie kolommen */
        gap: 20px; /* Ruimte tussen de blogposts */
    }

    .main-blog {
        grid-column: span 2; /* De eerste blogpost neemt twee kolommen in beslag */
    }

    .small-blog {
        grid-column: span 1; /* De overige blogposts nemen één kolom in beslag */
    }

    .main-blog {
        position: relative;
        width: 100%;
        margin-top: 0;
    }

    .main-blog .image-container {
        width: 100%;
        height: 100%;
        border: solid 3px var(--font-color);
    }

    .main-blog .image-container img {
        width: 100%;
        height: 100%;
    }

    .main-blog h3 {
        position: absolute;
        top: 5%;
        right: 5%;
        background-color: var(--primary-color);
        padding: 0.5rem 1rem;
        max-width: 20rem;
        border-radius: 20px;
    }

    .main-blog .blog-date {
        position: absolute;
        bottom: 5%;
        left: 5%;
        background-color: var(--primary-color);
        color: var(--font-color);
        text-align: center;
        text-decoration: none;
        font-weight: 700;
        font-size: 1rem;
        border: solid 2px var(--secondary-color);
        border-radius: 25px;
        padding: 0.5rem;
        min-width: 8rem;
        list-style-type: none;
    }

}
</style>