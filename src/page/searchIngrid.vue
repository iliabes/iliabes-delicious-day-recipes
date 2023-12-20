<script setup>
  import { onMounted ,ref,computed} from "vue";
  import {axiosClient} from "../axiosClient";
  import store from '../store/index'
  // import {router} from 'vue-router'


  let meals = computed(()=> store.state.searhedIngridients)

  onMounted(async()=>{
    
    store.dispatch('searhedIngridients')
    console.log(meals)
  })

  //  let discription = computed(() => {
  //    console.log(meals.strMeal);

  // })

  function description(val){
    console.log('val',val)
    if(val){
      if (val.length > 150){
          return val.slice(0, 150) + '...';
      }
    }
    return val  + '...'
  }


</script>




<template>

  <div class="flex justify-center mt-10 mx-5">
    <input type="text" class="border-2 border-grey-200 w-full " />
  </div>
  <!-- <pre>{{meals}}</pre> -->
  <div class="grid grid-cols-3  p-3 gap-1">
    
    <div  v-for="item in meals" :key="item.idMeal" class="flex flex-col shadow p-3 mt-1 text-center bg-green-200 ">
      <router-link :to="{name:'ingridient', params:{ingrid:item.strIngredient}}">
        <h3 class="font-bold italic items-center">{{item.strIngredient}}</h3>
        <p class="mt-3 tet-sm">{{description(item.strDescription)}}</p> 
      </router-link>
    </div>
    </div>


    
</template>
  

<style>

</style>