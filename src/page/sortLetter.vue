
<template>
  <div class="flex flex-row justify-center gap-1  m-5">
  <!-- <router-link v-for='letter in letters'  :key='letter'   to="/about"> {{letter}}</router-link> -->
  <router-link  v-for='letter in letters' :key='letter' :to="{name:`sortLetter`,params:{letter} }">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold  px-1 rounded border-1 border-black-700">
            {{letter}}
      </button>

  </router-link>

  </div>
  <!-- <pre>{{meals}}</pre> -->
  <div class="grid grid-cols-3 gap-3">
    <meal :meal="meal" v-for="meal in meals" :key="meal.idMeal"/>
  </div>

</template>

<script setup>
import { computed, onMounted, watch } from "vue";
import store from "../store";
import { searhMealLetter } from "../store/actions";
import meal from '../components/meal.vue'
import { useRoute } from "vue-router";


let route = useRoute()
let meals = computed(()=> store.state.searhedMealsLetter)
const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
watch(route,()=>{
  store.dispatch('searhMealLetter',route.params.letter)
})


onMounted(async()=>{
  console.log(route.params);
  store.dispatch('searhMealLetter',route.params.letter)
  console.log(meals);
})



</script>
