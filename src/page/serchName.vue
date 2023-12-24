<script setup>
  import { onMounted, ref, computed } from "vue"
  import store from "../store"
  import meal from '../components/meal.vue'



onMounted(async()=>{
  store.dispatch('searhMeal',keywords.value.value)
  console.log('searhMeal',keywords.value.value)
})

let keywords = ref('')
let meals = computed(()=> store.state.searhedMeals)


function changeInput(){
  store.dispatch('searhMeal',keywords.value.value)
}

</script>


<template>
<div class="w-full p-1">
  <input ref='keywords' value="salmon"    @input="changeInput" type="text" class="border-2 border-grey-200 block w-full" />
</div>
  
  <div class="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
    
    <meal  :id='meal.idMeal' :title="meal.strMeal" :img='meal.strMealThumb' v-for="meal in meals" :key="meal.idMeal"/>
</div>




</template>



<style>

</style>