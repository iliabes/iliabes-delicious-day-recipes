<script setup>
  import {useRoute} from 'vue-router'
  import {onMounted , ref, computed} from 'vue'
  import {searhMealIngridients} from '../store/actions'
  import store from '../store/index'
  import axios from 'axios'


  let route = useRoute()

  let meals = computed(()=>store.state.searhedMealsIngridients)


  onMounted(()=>{
    store.dispatch('searhMealIngridients',ingridient)
    console.log(import.meta.env.VITE_SOME_KEY)
    console.log(import.meta.env.VITE_BASE_URL_FOOD_API)
  })

  let str = 'The chicken is a type of domesticated fowl, a subspecies of the red junglefowl (Gallus gallus). It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011. There are more chickens in the world than any other bird or domesticated fowl. Humans keep chickens primarily as a source of food (consuming both their meat and eggs) and, less commonly, as pets. Originally raised for cockfighting or for special ceremonies, chickens were not kept for food until the Hellenistic period (4th–2nd centuries BC)'
    

    async function googleTranslateURL(){
        
        let data = await axios.post(`https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&sl=en&tl=ru&q=${str}`)
        console.log(data.request)
    }


</script>
<!-- https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&sl=${from}&tl=${to}&q=${txt} -->


<template>
<h2>serch by ingridient - <span class="font-bold">{{route.params.ingrid}}</span> </h2>
<div class="grid grid-cols-3">
  <div v-for="meal in meals"  :key="meal.idMeal" class="flex flex-col p-3 bg-red-200  rouded-md">
    <h3 class="font-bold">{{meal.strMeal}}</h3>
    <img :src="meal.strMealThumb" alt="">
    <button @click="googleTranslateURL(auto,ru,dog)">translate</button>
  </div>
</div>
</template>


