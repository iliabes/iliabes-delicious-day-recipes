<script setup>
import yotubeBtnVue from "./UI/yotubeBtn.vue";
import { computed } from "vue";





let img = computed(() => {
  if (props.img === undefined || props.img.length === "") {
    return "https://media.istockphoto.com/id/1392182937/vector/no-image-available-photo-coming-soon.jpg?s=612x612&w=0&k=20&c=3vGh4yj0O2b4tPtjpK-q-Qg0wGHsjseL2HT-pIyJiuc=";
  }
  return props.img;
});




function getId(id){ 
  // if(id){return id.slice(38,id.indexOf('?type')) }
  return '84b8126a7e5c3ceea9dcaee0f4d8df00'
}

let link = computed(() => {
  return { name: 'pageMealsEda', params: { id: getId(props.id) }}
});



const props = defineProps({
  img: String,
  title: String,
  id: String,
  hash1: {
    type: String,
    required: false,
    default: "#Gluten-Free",
  },
  hash2: {
    type: String,
    required: false,
    default: "#seafood",
  },
  hash3: {
    type: String,
    required: false,
    default: "#Low Sugar",
  },
  ingredientLines:{
    type: Array
  }
});


</script>



<template>

  <div
    class="rounded overflow-hidden shadow-lg bg-my-second hover:scale-105 duration-200 shadow"
  >
    <div class="overflow-hidden max-h-max">
      <router-link class="overflow-hidden " :to="link">
      <img class="border-1 hover:scale-125 hover:brightness-100 duration-300 brightness-75 w-full"  :src="img" alt="image" />
    </router-link>
    </div>
    <div class="px-2 py-4">
      <div class="font-bold text-xl mb-2">{{ props.title }}</div>
      <div class="flex lg:m-8">
        <ul class="flex flex-col mt-2">
          <li   v-for="item in props.ingredientLines" :key='item' class='list-none text-lg' >🔸 {{item}}</li>
        </ul>
      </div>
    </div>

    <div class="px-2 pt-2 pb-2">
      <span
        class="inline-block bg-gray-200 rounded-full px-2 py-2 text-xs font-semibold text-gray-700 mr-1 mb-2 bg-my-accentdark text-white"
        >{{ props.hash1 }}</span
      >
      <span
        class="inline-block bg-gray-200 rounded-full px-2 py-2 text-xs font-semibold text-gray-700 mr-1 mb-2 bg-my-accentdark text-white"
        >{{ props.hash2 }}</span
      >
      <span
        class="inline-block bg-gray-200 rounded-full px-2 py-2 text-xs font-semibold text-gray-700 mr-1 mb-2 bg-my-accentdark text-white"
        >{{ props.hash3 }}</span
      >
    </div>
  </div>
</template>



<style>
</style>





