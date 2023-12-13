<template>
    <main>
        <div>
            <h2>Create A New Blog</h2>
            <span class="sub-title">fdnd</span>
        </div>  
    <img class="purple-separator" src="@/static/images/separator-purple.svg" alt="Separator Purple">
        <form>
            <label for="title">Title</label>
            <input type="text" id="title" placeholder="Place your title here..." />

            <label for="introduction">Introduction</label>
            <textarea id="introduction" placeholder="Type a short introduction here..."></textarea>

            <label for="thumbnail">Add Your Thumbnail</label>

            <label for="yourPost">Your Post</label>
            <textarea id="yourPost" placeholder="Start typing..."></textarea>

            <!-- <button @click="cancel">Cancel</button>
            <button @click="send">Send</button> -->
        </form>
    </main>
</template>