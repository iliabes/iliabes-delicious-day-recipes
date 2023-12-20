<script setup>
import yotubeBtnVue from "../components/UI/yotubeBtn.vue";
import { computed } from "vue";


let param = true


let description = computed(() => {

  if(Array.isArray(props.description)){
      if (props.description.join().length > 150){
        return props.description.join().slice(0, 150);
    }
  }
  if (props.description.length > 150){
    return props.description.slice(0, 150);
  }
  return props.description
});

let img = computed(() => {
  console.log(props.img)
  if (props.img === undefined || props.img.length === ''  ) {
    return "https://media.istockphoto.com/id/1392182937/vector/no-image-available-photo-coming-soon.jpg?s=612x612&w=0&k=20&c=3vGh4yj0O2b4tPtjpK-q-Qg0wGHsjseL2HT-pIyJiuc=";
  }
  return props.img;
});

const props = defineProps({
  img: String,
  title: String,
  id: Number,
  description: {
    required: false,
    default:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
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
});


</script>



<template>
   
  <div
    v-if='param'
    class="rounded overflow-hidden shadow-lg bg-red-200 hover:scale-105 duration-200 shadow"
  >
    <router-link class="" :to="{ name: 'pageMeals', params: { id: props.id } }">
      <img class="w-full" :src="img" alt="Sunset in the mountains" />
    </router-link>

    <div class="px-2 py-4">
      <div class="font-bold text-xl mb-2">{{ props.title }}</div>
      <p class="text-gray-700 text-base">{{ description + "..." }}</p>
    </div>



    <div class="px-2 pt-4 pb-2">
      <span
        class="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1 mb-2"
        >{{ props.hash1 }}</span
      >
      <span
        class="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1 mb-2"
        >{{ props.hash2 }}</span
      >
      <span
        class="inline-block bg-gray-200 rounded-full px-2 py-2 text-xs font-semibold text-gray-700 mr-1 mb-2"
        >{{ props.hash3 }}</span
      >
    </div>
    <!-- <yotubeBtn :linkYoutube="props.linkYoutube" /> -->
  </div>
</template>



<style>
</style>

<!-- // props.meal.strTags.split(',')[0] -->

    <!-- <div class="px-6 pb-2 w-full flex items-center justify-start">
      <a
        href="https://loadmcx.com"
        target="_blank"
        class="relative inline-flex items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-semibold shadow text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-200 group"
      >
        <span
          class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"
        ></span>
        <span
          class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12"
        >
          <svg
            class="w-5 h-5 text-green-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span
          class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200"
        >
          <svg
            class="w-5 h-5 text-green-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span
          class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white"
          >Recipe</span
        >
      </a>
    </div> -->