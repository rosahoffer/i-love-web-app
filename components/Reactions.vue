<script setup>
    const { data } = await useFetch('https://api-eu-west-2.hygraph.com/v2/clpceledoaa4y01unccm36p1r/master', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query Comments {
          comments {
            id
            name
            createdAt
            comment
          }
        }`
      }),
    });
  
    const comments = await data.value.data.comments;
    console.log("Parsed comments:", comments); // Controleer of comments correct worden opgehaald
</script>

<template>
    <main>
        <section>
            <div class="recent-comments">
                <h3>Recente Opmerkingen</h3>
                <p>Ontdek wat anderen te zeggen hebben!</p>
                <ul>
                    <li v-for="comment in comments" :key="comment.id">
                        <p class="blog-introduction" >{{ comment.name }}</p>
                        <p>{{ comment.comment }}</p>
                    </li>
                </ul>
            </div>
        </section>
    </main>
</template>

<style scoped>

.root{
    /* COLORS */

    --primary-color: #F0EDF3;
    --secondary-color: #AE8FD4;
    --tertiary-color: #EACFFF;
    --font-color: #5B5368;
}

main{
    margin: 0;
    padding: 0;
}

section{
    width: 100%;
    background-color: var(--tertiary-color);
    border-radius: 15px;
    padding: 4rem 2.5rem;
    margin: auto;
    max-width: 50rem;
}

h3{
    font-size: 2.5rem;
    line-height: 2.5rem;
    margin-bottom: 1.5rem;
    font-weight: 900;
    font-style: italic;
    letter-spacing: -2px;
    color: var(--font-color);
    text-transform: capitalize;
    text-align: center;
}

p{
    line-height: 1.4rem;
    margin-bottom: 3rem;
    text-align: center;
}

ul{
    list-style-type: none;
    background-color: #F4E5FF;
    padding: 2rem;
    border-radius: 15px;
}

p:first-child{
    margin: 0 0 1rem 0;
    text-align: left;
}

p:last-child{
    font-style: italic;
    margin: 0;
    text-align: left;
}



</style>
  