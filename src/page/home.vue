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
    <div class="px-1 py-1">
        <h2 class="text-4xl font-serif text-my-accentdark">Random dishes</h2>
        <div class=" border-2 border-sky-500 mb-2 "></div>
        <div class="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-2 ">
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






</template>



<style>
</style>