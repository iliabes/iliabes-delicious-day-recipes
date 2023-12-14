<script setup>
  import { onMounted ,ref} from "vue";
  import {axiosClient} from "../axiosClient";
  // import {router} from 'vue-router'


let meals = ref({})

    onMounted(async()=>{
    axiosClient.get(`list.php?i=list`)
    .then(({data})=>{
      console.log(data)
      meals.value = data.meals
    })
    console.log(meals)
  })
</script>




<template>
  <div class="flex justify-center mt-10 mx-5">
    <input type="text" class="border-2 border-grey-200 w-full " />
  </div>
  <div class="grid grid-cols-3  p-3 gap-1">
    <!-- <pre>{{meals}}</pre> -->
    <div  v-for="meal in meals" class="flex flex-col shadow p-3 mt-1 text-center bg-green-200 ">
      <router-link :to="{name:'ingridient', params:{ingrid:meal.strIngredient}}">
        <h3 class="font-bold italic items-center">{{meal.strIngredient}}</h3>
        <p class="mt-3 tet-sm">{{meal.strDescription}}</p> 
      </router-link>
    </div>
    </div>


    
</template>
  

<style>

</style>