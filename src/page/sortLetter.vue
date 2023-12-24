
<script setup>
import { computed, onMounted, watch } from "vue";
import store from "../store";
import meal from '../components/meal.vue'
import { useRoute } from "vue-router";


let route = useRoute()
let meals = computed(()=> store.state.searhedMealsLetter)
const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')

watch(route,()=>{
  store.dispatch('searhMealLetter',route.params.letter)
})


onMounted(async()=>{
  store.dispatch('searhMealLetter',route.params.letter)
})

</script>


<template>
  <div class="flex flex-row justify-center gap-1  m-5 flex-wrap ">
  <router-link  v-for='letter in letters' :key='letter' :to="{name:`sortLetter`,params:{letter} }">
      <button class="bg-my-accentdark hover:bg-blue-700 text-white font-bold  px-1 rounded border-1 border-black-700 tracking-tight">
            {{letter}}
      </button>
  </router-link>

  </div>
  <div class="p-1">
  <div class="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      <meal 
        :hash1="item.strCategory"
        :hash2="item.Portuguese"
        :hash3="item.strIngredient1" 
        :img="item.strMealThumb"
        :id="item.idMeal"
        :title="item.strMeal"
        :key="item.idMeal"
        v-for="item in meals"
      />

  </div>
</div>
</template>

