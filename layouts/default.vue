<script setup>
  import { ref } from 'vue';
  import MainNav from '../components/MainNav.vue';
</script>


<template>
    <div>
      <MainNav />
      <slot />
    </div>
  </template>

  