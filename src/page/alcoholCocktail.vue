<script setup>
  import { computed, onMounted, watch, ref } from "vue";
  import meal from "../components/mealEda.vue";
  import store from "../store";
  import { v4 as uuidv4 } from 'uuid';

let dataMeal = computed(() => store.state.searhedAlcohol);
let idMeal = computed(() => uuidv4());


onMounted(() => {
  store.dispatch("searhAlcohol");
});



</script>



<template>
  <div class="grid grid-cols-1 gap-1 m-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
    <meal
      :hash1="item.recipe.healthLabels[0]"
      :hash2="item.recipe.healthLabels[1]"
      :hash3="item.recipe.healthLabels[2]" 
      :description="item.recipe.instructionLines"
      :img="item.recipe.image"
      :id="item._links.self.href"
      :title="item.recipe.label"
      :ingredientLines="item.recipe.ingredientLines"
      :key="index"
      v-for="(item,index) in dataMeal"
    />

  </div>

</template>


    