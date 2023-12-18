<script setup>
import { computed, onMounted, watch } from "vue";
import store from "../store";
import { searhMealLetter } from "../store/actions";
import meal from '../components/meal.vue'
import { useRoute } from "vue-router";


  const meals = computed(() => store.state.searhedMealsCategories)
  let ingridient = 'route.params.ingrid'

  onMounted(()=>{
    store.dispatch('searhMealIngridients',ingridient)
    console.log(meals)
    // console.log('food categories')
  })
</script>



<template>
 <h1>this is  mealsLands</h1>
 <pre>{{meals}}</pre>
</template>



<style>
</style>