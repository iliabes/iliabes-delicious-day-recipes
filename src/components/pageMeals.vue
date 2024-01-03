<script setup>
  import store from "../store";
  import { onMounted, ref, computed } from "vue";
  import {useRoute} from 'vue-router'
  import {axiosClient} from "../axiosClient";
  import yotubeBtn from '../components/UI/yotubeBtn.vue'


  let meal = ref({})


  const route = useRoute()
  

  onMounted(async()=>{
    axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then(({data})=>{
        meal.value = data.meals[0]
    })
  })
  
</script>



<template>
<div class="contCard">
  <div class="contMeal">
    <h1 class="2xl:my-10 font-bold text-lg my-5 text-center">{{meal.strMeal}}</h1>
    <img class=" " :src='meal.strMealThumb' alt="">
    <p class="2xl:my-12  my-8 text-base">{{meal.strInstructions}}</p>
     <a class="mt-4  py-2  px-1  bg-my-accent rounded-md inline w-20 self-start" :href="meal.strYoutube">youtube</a>
    <div class="flex mt-3">
      <ul class="flex flex-col ">
        <li v-show="meal[`strIngredient${index+1}`]"  v-for="(item,index) in 20" :key=index class='list-none italic' > 🔸 {{meal[`strIngredient${index+1}`]}}</li>
      </ul>
      <ul  class="flex flex-col mx-5">
        <li v-for="(item,index) in 20" :key=index class='list-none italic' > {{meal[`strMeasure${index+1}`]}}</li>
      </ul>
    </div>
   

  </div>
</div>
</template>
  

mt-2  py-2  px-1  bg-my-accent rounded-md inline w-20
<style>

  .contMeal{
    @apply 2xl:px-56 xl:px-32 lg:px-28 lg:border lg:border-my-accent  md:px-14 my-10 p-3 justify-center items-center flex flex-col rounded-md
  } 
  .contCard{
    @apply 2xl:px-28 xl:px-24 lg:px-10
      
  }


</style>