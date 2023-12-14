
<template>
      <div class="flex flex-col bg-red-200 border-2 border-sky-2000 rounded-md shadow hover:scale-105  duration-200"  >
        <img class="h-48 w-full object-cover" :src='props.meal.strMealThumb'>
          <div class="m-1">
            <p class="px-3 py-2 font-semibold">{{props.meal.strMeal}}</p> 
            <p>lorem insum sit amet dollas lorem insum sit amet dollas  lorem insum sit amet dollas  lorem insum sit amet dollas </p>
            <div class="mt-5 flex item-center justify-between">
            <yotubeBtn :linkYoutube="props.meal.strYoutube"/>
            <router-link  class="p-2  border-b rounded-md bg-orange-400  hover:bg-purple-400" :to="{name:'pageMeals',params:{id:props.meal.idMeal}}">View</router-link>
            </div> 
          </div>
      </div>

</template>

<script setup>
  import yotubeBtnVue from "../components/UI/yotubeBtn.vue";

  const props = defineProps({
    meal:{
    linkYoutube:String,
    strMealThumb: String,
    strMeal: String,
    strYoutube: String,
    idMeal: Number
    }

  })

</script>

<style>

</style>