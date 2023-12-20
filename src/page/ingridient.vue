<script setup>
  import {useRoute} from 'vue-router'
  import {onMounted , ref, computed} from 'vue'
  import {searhMealIngridients} from '../store/actions'
  import store from '../store/index'
  import axios from 'axios'


  let route = useRoute()

  let meals = computed(()=>store.state.searhedMealsIngridients)
 

  onMounted(()=>{store.dispatch('searhMealIngridients',ingridient)})



</script>



<template>
<h2>serch by ingridient - <span class="font-bold">{{route.params.ingrid}}</span> </h2>
<div class="grid grid-cols-3">
  <h1>!!!!!!!!!!!!!!!!</h1>
  <div v-for="meal in meals"  :key="meal.idMeal" class="flex flex-col p-3 bg-red-200  rouded-md">
    <h3 class="font-bold">{{discription}}</h3>
    <img :src="meal.strMealThumb" alt="">
    
  </div>
</div>
</template>


