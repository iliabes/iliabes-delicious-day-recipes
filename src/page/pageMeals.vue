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
        console.log(meal);

    })
  })
</script>


<template>
 <!-- <pre>{{meal}}</pre>  -->
 <div class="w-[600px] mx-auto my-10 p-3 border-red-200 border-2 flex flex-col rounded-md">
    <h1 class="font-bold text-lg mb-5 ">{{meal.strMeal}}</h1>
    <img :src='meal.strMealThumb' alt="">
    <p class="mt-3">{{meal.strInstructions}}</p>
    <div class="flex ">
      <ul class="flex flex-col">
        <li v-show="meal[`strIngredient${index+1}`]"  v-for="(item,index) in 20" :key=index class='list-none' >{{index}} {{meal[`strIngredient${index+1}`]}}</li>
      </ul>
      <ul  class="flex flex-col mx-5">
        <li v-for="(item,index) in 20" :key=index class='list-none' > {{meal[`strMeasure${index+1}`]}}</li>
      </ul>

    </div>
       <yotubeBtn :linkYoutube="meal.strYoutube"/>
  </div>
 
</template>
  


<style>

</style>