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
                    html
                  }
                }
              }`
            },
        })

let blogs = await data.value.data.blogs

// Sorteer de blogs op basis van de 'publishedAt' datum in aflopende volgorde
blogs.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

console.log("Parsed blogs:", blogs); // Controleer of blogs correct worden opgehaald en gesorteerd
</script>

<template>
  <main>
    <section class="grid-contain">
      <div class="heading-title-contain fade-in-left">
        <h1>Best Of This Week<span class="sub-title">fdnd</span></h1>
        <img class="purple-separator" src="/img/separator-purple.svg" alt="Separator Purple">
      </div> 
        <article class="blog-post fade-in-left" v-if="blogs && blogs.length > 0">
          <div class="image-container">
            <NuxtLink :to="`${blogs[0].slug}`">
              <img v-if="blogs[0].thumbnail" :src="blogs[0].thumbnail.url" alt="Image Design System">
            </NuxtLink>  
          </div>
            <h3>{{ blogs[0].title }}</h3>
            <li class="blog-date">{{ blogs[0].date }}</li>
        </article>
        <div class="button-all-posts-contain fade-in-right">
          <NuxtLink class="primary-button" to="/AllPosts">see more posts</NuxtLink>
        </div>
        <div class="separator-contain fade-in-right">
          <img class="purple-separator" src="/img/separator-purple.svg" alt="Separator Purple">
        </div>
        <div class="create-blog-button fade-in-right">
          <NuxtLink to="/CreateBlog"> <p>create a new blog</p>
            <img src="/img/add-button.svg" alt="add button image">
          </NuxtLink>
        </div>
    </section>
  </main>
</template>

<style scoped>

.blog-post{
    margin-top: 2.5rem;
}

.button-all-posts-contain{
  margin: 3rem 0rem;
  max-width: 12rem
}

/* BREAKPOINTS */

@media (min-width: 45rem) {
  .grid-contain {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: repeat(2, 0.5fr) 0.2fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 0px;
  }

  .heading-title-contain { grid-area: 1 / 1 / 2 / 2; }
  .blog-post { grid-area: 2 / 1 / 5 / 2; }
  .button-all-posts-contain { grid-area: 4 / 2 / 5 / 3; }
  .separator-contain { grid-area: 3 / 2 / 4 / 3; }
  .create-blog-button { grid-area: 1 / 2 / 3 / 3; }

  body{
    height: 100vw;
    overflow: hidden;
  }

  .blog-post{
    position: relative;
    width: 100%;
    margin-top: 0;
  }

  .image-container{
    width: 100%;
    height: 100%;
    border: solid 3px var(--font-color);
  }

  .image-container img{
    width: 100%;
    height: 100%;
  }

  .blog-post h3{
    position: absolute;
    top: 5%;
    right: 5%;
    background-color: var(--primary-color);
    padding: 0.5rem 1rem;
    max-width: 20rem;
    border-radius: 20px;
  }

  .blog-date{
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

  .create-blog-button{
    margin-left: auto;
    margin-top: 0;
  }

  .separator-contain{
    padding: 2rem 0rem;
  }

  .separator-contain > .purple-separator{
    width: 100%;
  }

  .button-all-posts-contain{
    max-width: 100%;
    height: 100%;
    margin: auto;
    border: solid 10px var(--secondary-color);
    border-radius: 20px;
  }

  .button-all-posts-contain > a{
    border: none;
    color: var(--secondary-color);
    text-transform: uppercase;
    font-size: 5rem;
    font-weight: 400;
    letter-spacing: -5px;
    line-height: 5rem;
    background-color: transparent;
    padding: 0;
  }

  .button-all-posts-contain > .primary-button a{
    margin: 5rem;
  }
}

@media (min-width:75rem){

  main{
    padding: 5rem;
  }
  .blog-post{
    margin-top: -2rem
  }

  .create-blog-button{
    width: 100%;
    height: 100%;
  }
  .create-blog-button a{
    margin: 1.5rem;
  }
  .create-blog-button p{
    max-width: 13rem;
    margin-top: -1rem;
  }
}

@media (min-width:90rem){
  .create-blog-button a{
    /* padding: 3rem; */
    margin: 1rem;
  }
  .create-blog-button p{
    margin: 0;
    max-width: 13rem;
    font-size: 4.3rem;
    line-height: 4.5rem;
    letter-spacing: -3px;
  }

}


</style>