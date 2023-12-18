<script setup>
  import { onMounted, ref, computed } from "vue";
  import {axiosClient} from "../axiosClient";
  import yotubeBtnVue from "../components/UI/yotubeBtn.vue";
  import store from "../store";
  import yotubeBtn from '../components/UI/yotubeBtn.vue';
  import meal from '../components/meal.vue'



onMounted(async()=>{
  store.dispatch('searhMeal',keywords.value.value)
})

let keywords = ref('')
let meals = computed(()=> store.state.searhedMeals)

function test(){
  store.dispatch('searhMeal',keywords.value.value)
}

function changeInput(){
  store.dispatch('searhMeal',keywords.value.value)
}

</script>


<template>
  <input ref='keywords' value="salmon"    @input="changeInput" type="text" class="border-2 border-grey-200 w-full" />
  <!-- <pre>{{meals}}</pre> -->
  <div class="grid grid-cols-3 gap-3">
    
    <meal ::linkYoutube='meal.strYoutube' :id=meal.mealId :title="meal.strMeal" :img='meal.strMealThumb' v-for="meal in meals" :key="meal"/>
</div>



<!--<div class="grid grid-cols-3 gap-3">
      <div class="flex flex-col bg-red-200 border-2 border-sky-2000 rounded-md shadow hover:scale-105  duration-200" v-for="meal in meals" :key="meal.idMeal">
        <img class="h-48 w-full object-cover" :src='meal.strMealThumb'>
          <div class="m-1">
            <p class="px-3 py-2 font-semibold">{{meal.strMeal}}</p> 
            <p>lorem insum sit amet dollas lorem insum sit amet dollas  lorem insum sit amet dollas  lorem insum sit amet dollas </p>
            <div class="mt-5 flex item-center justify-between">
            <yotubeBtn :linkYoutube="meal.strYoutube"/>
            <router-link  class="p-2  border-b rounded-md bg-orange-400  hover:bg-purple-400" :to="{name:'pageMeals',params:{id:meal.idMeal}}">View</router-link>
            </div> 
          </div>
      </div>
    </div> -->
    <!-- <yotubeBtn /> -->


</template>



<style>

</style>