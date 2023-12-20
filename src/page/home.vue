<script setup>
    import store from '../store'
    import meal from '../components/meal.vue'
    import { computed, onMounted } from "vue";


    const meals = computed(() => store.state.searhedMealsRandom)


    onMounted(()=>{
        store.dispatch('searhMealsRandom')
    })



</script>




<template>
    <router-view />
    <div class="p-5">
        <h2 class="text-4xl font-serif mt-5">Random dishes</h2>
        <div class=" border-2 border-sky-500 mb-5 "></div>
        <div class="grid grid-cols-2 gap-1">
           
                <meal
                    :hash1="item.strCategory"
                    :hash2="item.Portuguese"
                    :hash3="item.strIngredient1" 
           
                    :img="item.strMealThumb"
                    :id="item.idMeal"
                    :title="item.strMeal"
                    :key="item.idMeal"
                    v-for="item in meals"
                    
                />

        </div>
    </div>


        <h2 class="text-4xl font-serif mt-5 m-5">The most interst</h2>
        <div class=" border-2 border-sky-500 m-5 "></div>

        <div class="grid grid-row-2 gap-1 m-5">
          
          <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://www.themealdb.com/images/media/meals/xxrxux1503070723.jpg" alt="">
          <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
          </a>
        </div>

        <div class="grid grid-cols-2 gap-1 m-5">
          
          <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://www.themealdb.com/images/media/meals/xxrxux1503070723.jpg" alt="">
          <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
          </a>
        </div>

        <div class="grid grid-cols-2 gap-1 m-5">
          
          <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://www.themealdb.com/images/media/meals/xxrxux1503070723.jpg" alt="">
          <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
          </a>
        </div>


</template>



<style>
</style>