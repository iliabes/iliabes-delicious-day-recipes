<script setup>
import yotubeBtnVue from "../components/UI/yotubeBtn.vue";
import { computed } from "vue";

let param = true;

let description = computed(() => {
  if (Array.isArray(props.description)) {
    if (props.description.join().length > 150) {
      return props.description.join().slice(0, 150);
    }
    return props.description.join()
  }
  if (props.description.length > 150) {
    return props.description.slice(0, 150);
  }
  return props.description;
});

let img = computed(() => {

  if (props.img === undefined || props.img.length === "") {
    return "https://media.istockphoto.com/id/1392182937/vector/no-image-available-photo-coming-soon.jpg?s=612x612&w=0&k=20&c=3vGh4yj0O2b4tPtjpK-q-Qg0wGHsjseL2HT-pIyJiuc=";
  }
  return props.img;
});




function getId(id){ return id.slice(38,id.indexOf('?type')) }

let link = computed(() => {

  if (props.eda === false) {
    return { name: 'pageMeals', params: { id: props.id }}
  }  
    return { name: 'pageMealsEda', params: { id: getId(props.id) }}
  
});

const props = defineProps({
  img: String,
  title: String,
  id: [Number , String],
  description: {
    required: false,
    default:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
  },
  linkYoutube: {
    type: String,
    required: false,
    default: "https://www.youtube.com/watch?v=uiDLOAjaHUI",
  },
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
  eda: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>



<template>
  <div
    v-if="param"
    class="rounded overflow-hidden shadow-lg bg-my-second hover:scale-105 duration-200 shadow"
  >
    <div class="overflow-hidden max-h-max">
      <router-link class="overflow-hidden " :to="link">
      <img class="border-1 hover:scale-125 hover:brightness-100 duration-300 brightness-75 w-full"  :src="img" alt="image" />
    </router-link>
    </div>
    <div class="px-2 py-4">
      <div class="font-bold text-xl mb-2">{{ props.title }}</div>
      <p class="text-gray-700 text-base">{{ description + "..." }}</p>
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
    <!-- <yotubeBtn :linkYoutube="props.linkYoutube" /> -->
  </div>
</template>



<style>
</style>





