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
<div class="w-full p-1">
  <input ref='keywords' value="salmon"    @input="changeInput" type="text" class="border-2 border-grey-200 block w-full" />
</div>
  
  <div class="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
    
    <meal :linkYoutube='meal.strYoutube' :id='meal.idMeal' :title="meal.strMeal" :img='meal.strMealThumb' v-for="meal in meals" :key="meal"/>
</div>




</template>



<style>

</style>