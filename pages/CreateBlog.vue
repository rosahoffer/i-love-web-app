<template>
    <main>
      <div class="heading-title-contain">
        <h2>Create A New Blog<span class="sub-title">fdnd</span></h2>
      </div>
      <div>
        <img class="purple-separator" src="/img/separator-purple.svg" alt="Separator Purple">
      </div>
      <form>
        <label for="title">Title</label>
        <input type="text" id="title" placeholder="place your title here..." />
  
        <label for="introduction">Introduction</label>
        <input type="text" id="introduction" placeholder="type a short introduction here...">
  
        <label for="thumbnail">Add Your Thumbnail</label>
        <input type="file">
  
        <label for="yourPost">Your Post</label>
        <input type="text" id="yourPost" placeholder="start typing...">
  
        <div class="button-container">
          <NuxtLink to="/" class="tertiary-button">cancel</NuxtLink>
          <button class="secondary-button">send</button>
        </div>
      </form>
    </main>
  </template>


<style scoped>

/* FORM STYLES */

form{
  margin-top: 2rem;
}

form label {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--font-color);
  letter-spacing: -1px;
}

form input{
  width: 100%;
  padding: 1rem;
  margin-top: 0.5rem;
  border: 2px solid var(--font-color);
  border-radius: 15px;
}

/* BUTTON CONTAINER STYLES */
.button-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: fit-content;
    margin-top: 2rem;
}
</style>
  