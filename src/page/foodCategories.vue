<script setup>
import { computed, onMounted, watch } from "vue";
import store from "../store";
import { searhedMealsCategories } from "../store/actions";
import meal from "../components/meal.vue";
import { useRoute } from "vue-router";


const meals = computed(() => store.state.searhedMealsCategories.categories);
let ingridient = "route.params.ingrid";

onMounted(() => {
  store.dispatch("searhedMealsCategories", ingridient);
  console.log(meals);
  console.log('food categories')
});
</script>



<template>
  <h1>this is food categories</h1>
  <div class="grid grid-cols-3 gap-1">
    <div v-for="item in meals" :key="item.idCategory" class="border max-h-90">
      <img :src="item.strCategoryThumb" class="w-full" alt="..." />
      <div class="p-4">
        <h5
          class="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase"
        >
          {{ item.strCategory }}
        </h5>
        <p>
        </p>
        <a
          href="#"
          class="bg-green-500 hover:bg-green-400 text-white px-4 py-2 inline-block mt-4 rounded"
          >View meals</a
        >
      </div>
    </div>
  </div>
</template>



<style>
</style>