<script setup>
  import store from "../store";
  import { onMounted, ref, computed } from "vue";
  import {useRoute} from 'vue-router'
  import {axiosClient} from "../axiosClient";
  import yotubeBtn from '../components/UI/yotubeBtn.vue'


  const route = useRoute()

  onMounted(()=>{
    store.dispatch('earhedMealsEdaman',route.params.id)
    console.log(dataMeal)
  })


  let dataMeal = computed(() => store.state.earhedMealsEdaman);

  let ingridient = computed(() => {
    if(dataMeal.value.instructionLines){
      return dataMeal.value.instructionLines.join(',')
      }
  });

  let tags = computed(() => {
    if(dataMeal.value.tags){
      if(dataMeal.value.tags.length > 3){
          return dataMeal.value.tags.slice(0,3)
      }
      return dataMeal.value.tags
    }
  });


</script>


<template>
  <div class="contCard">
    <div class="contMeal">
      <h1 class="font-bold text-lg my-5 text-center ">{{dataMeal.label}}</h1>
      <img class="xl:w-3/5 md:w-3/4" :src='dataMeal.image' alt="image meal">
      <p class="lg:m-8 font-mono text-base text-lg">{{ingridient}}</p>
      <p class="mt-5">{{dataMeal.summary}}</p>
      <div class="flex lg:m-8">
        <ul class="flex flex-col mt-2">
          <li   v-for="item in dataMeal.ingredients" :key='item' class='list-none text-lg' >🔸 {{item.text}}</li>
        </ul>
      </div>
      <div class="flex justify_start mt-5">
        <button class="bg-red-200 ml-2 p-2 " v-for="item,index in tags" :key="index" >{{item}}</button>
      </div>
  </div> 
</div>
</template>
  


<style>
  .contMeal{
    @apply 2xl:px-56 xl:px-32 lg:px-28 md:border md:border-my-accent md:px-6 my-10 p-3 justify-center items-center flex flex-col rounded-md
  } 
  .contCard{
    @apply 2xl:px-28 xl:px-24 lg:px-10 md:px-10
      
  }

</style>


