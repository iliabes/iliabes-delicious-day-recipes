<script setup>
import { useRoute } from "vue-router";
import { onMounted, ref, computed } from "vue";
import { searhMealIngridients } from "../store/actions";
import store from "../store/index";
import axios from "axios";

let route = useRoute();
let meals = computed(() => store.state.searhedMealsIngridients);

onMounted(() => {
  store.dispatch("searhMealIngridients", route.params.ingrid);
});
</script>



<template>
  <h2 class="font-bold text-lg mb-5 text-center my-3">
    Serch by ingridient - {{ route.params.ingrid }}

  </h2>
  <div class="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
    
      <div v-for="meal in meals" :key="meal.idMeal" class="flex flex-col p-3 bg-my-second rouded-md ">
        <router-link  :to="{name: 'pageMeals', params: { id: meal.idMeal }}">
          <h3 class="font-bold">{{meal.strMeal}}</h3>
          <img :src="meal.strMealThumb" alt="" />
        </router-link>
      </div>
    
  </div>

</template>


