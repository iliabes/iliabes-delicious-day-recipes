<script setup>
import { computed, onMounted } from "vue";
import meal from "../components/meal.vue";
import store from "../store";

let dataMeal = computed(() => store.state.searhedMealsLands);

let lands = ["asian", "american", "french", "italian", "indian", "mexican"];

onMounted(() => {
  store.dispatch("searhMealsLands",'asian');
});

function changeLand(land) {
  store.dispatch("searhMealsLands", land);
}




</script>



<template>
  <div class="">
    <div class="flex flex-wrap  justify-center my-3 ">
      <button
        v-for="land,index in lands"
        :key="index"
        @click="changeLand(land)"
        class="rounded-md py-2 px-4 mt-1 ml-1 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-gray-100 focus:outline-none"
      >
        {{ land }}
      </button>
    </div>
  </div>

  <div class="grid grid-cols-1 gap-1 m-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
    <meal
      :hash1="item.recipe.healthLabels[0]"
      :hash2="item.recipe.healthLabels[1]"
      :hash3="item.recipe.healthLabels[2]" 
      :description="item.recipe.instructionLines"
      :img="item.recipe.image"
      :id="item._links.self.href"
      :eda='true'
      :title="item.recipe.label"
      v-for="item in dataMeal"
      :key="item"
    />
  </div>
</template>




