<template>
  <div class="flex  justify-between  bg-red-100 items-center px-5">
    <router-link class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" to="/">Home</router-link>
    <div class="flex items-center gap-1">
      <router-link class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" to="/searchIngrid">serch by ingridient</router-link>
      <router-link class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" to="/serchName">search by name</router-link>
      <router-link class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" to="/sortLetter">search by letter</router-link>
      <router-link class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" to="/alcoholCocktail">Alcohol-Cocktail</router-link>
      <router-link class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" to="/mealsLands">meal by lands</router-link>
      
    </div>

  </div>
</template>

<script>

export default {

}
</script>

<style >

</style>