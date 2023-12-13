<script setup>
  import store from '../store'
  import {computed} from 'vue'
  const meals = computed(() => store.state.meals)
</script>



<template>
    <router-view />
</template>



<style>
</style>