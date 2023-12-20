<script setup>
import { computed, onMounted, watch, ref } from "vue";
import { searhMealsLands } from "../store/actions";
import { useRoute } from "vue-router";
import axios from "axios";
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
  <div class="flex m-5 justify-center">
    <div class="mb-2 mr-2">
      <button
        v-for="land in lands"
        :key="land.indexd"
        @click="changeLand(land)"
        class="rounded-md py-2 px-4 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-gray-100 focus:outline-none"
      >
        {{ land }}
      </button>
    </div>
  </div>

  <div class="grid grid-cols-3 gap-1 m-5">
    <meal
      :hash1="item.recipe.healthLabels[0]"
      :hash2="item.recipe.healthLabels[1]"
      :hash3="item.recipe.healthLabels[2]" 
      :description="item.recipe.instructionLines"
      :img="item.recipe.image"
      :id="Date.now()"
      :title="item.recipe.label"
      v-for="item in dataMeal"
      :key="item"
    />
  </div>
</template>




