<script setup>
import { computed, onMounted, watch,ref } from "vue";
import store from "../store";
import { searhActionMealsRandom } from "../store/actions";
import meal from "../components/meal.vue";
import { useRoute } from "vue-router";
import axios from "axios";

const meals = computed(() => store.state.searhedMealsRandom);


function getRandomIdMeal() {
  let rand = 0 + Math.random() * (302 + 1 - 0);
  return Math.floor(rand);
}

function getRandomMeal() {
  let resArr = []
  for (let index = 0; index < 8; index++) {
    resArr.push(getRandomIdMeal())
  }
  return resArr
}

// onMounted(() => {
//   getRandomMeal()
//   store.dispatch('searhActionMealsRandom')
//   console.log(meals.meals);
// });





console.log(import.meta.env.VITE_APP_ID,import.meta.env.VITE_APP_KEY)
let dataMeal = ref('')

let config = {
  params:{
    app_id:import.meta.env.VITE_APP_ID,   
    app_key:import.meta.env.VITE_APP_KEY,
    type:"public",
    // beta:'true',
    // ingr:'5-8',
    // q:'egg',
    // cuisineType:"american",
    // dishType: 'sweets',
    
    // diet:'high-fiber'

    // foodId:123
    // mealType:'breakfast'
    cuisineType:"French"
    // mealType:"Dinner",
    // ingr:'tuna'
    // health:'alcohol-cocktail'

  }
}





onMounted(() => {
  axios.get('https://api.edamam.com/api/recipes/v2',config)
    .then((data)=>{
          dataMeal.value = data.data.hits
          console.log(dataMeal)
      })
  // console.log(dataMeal)
});
</script>



<template>
  <h1>this is randomMeals</h1>
  <!-- <pre>{{dataMeal}}</pre> -->
  <pre>{{ meals.meals }}</pre> 


  <div class="grid grid-cols-3 gap-1">
    <div v-for="item in dataMeal" :key="item.idCategory" class="border max-h-90">
      <img :src="item.recipe.image" class="w-full" alt="..." />
      <div class="p-4">
        <h5
          class="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase"
        >
          {{  item.recipe.label }}
        </h5>
        <p>
          {{ item.recipe.category}}
        </p>
        <a
          href="#"
          class="bg-green-500 hover:bg-green-400 text-white px-4 py-2 inline-block mt-4 rounded"
          >View meals</a
        >
      </div>
    </div>
  </div> 

</template>



<style>
</style>