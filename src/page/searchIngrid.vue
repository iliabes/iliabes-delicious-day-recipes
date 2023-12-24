<script setup>
  import { onMounted ,ref,computed} from "vue";
  import {axiosClient} from "../axiosClient";
  import store from '../store/index'
  // import {router} from 'vue-router'


  let meals = computed(()=> store.state.searhedIngridients)

  onMounted(async()=>{
    store.dispatch('searhedIngridients')
  })



  function description(val){
    if(val){
      if (val.length > 150){
          return val.slice(0, 150) + '...';
      }
    }
    return val  + '...'
  }


</script>




<template>
  <!-- <pre>{{meals}}</pre> -->
  <div class="grid grid-cols-1  p-3 gap-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
    
    <div  v-for="item in meals" :key="item.idMeal" class="flex flex-col shadow p-3 mt-1 text-center bg-my-second ">
      <router-link :to="{name:'ingridient', params:{ingrid:item.strIngredient}}">
        <h3 class="font-bold italic items-center">{{item.strIngredient}}</h3>
        <p class="mt-3 tet-sm">{{description(item.strDescription)}}</p> 
      </router-link>
    </div>
    </div>


    
</template>
  

<style>

</style>