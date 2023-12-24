<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
  } from '@headlessui/vue'


const router = useRouter()

  const pages = [
    { id: 1, name: 'Search by land', unavailable: false, link:'/mealsLands' },
    { id: 2, name: 'Search by name', unavailable: false, link:'/serchName'},
    { id: 3, name: 'Search by  letter', unavailable: false, link:'/sortLetter/a'},
    { id: 4, name: 'Alcohol-cocktail', unavailable: false, link:'/alcoholCocktail'},
    { id: 5, name: 'Search ingridient', unavailable: false, link:'/searchIngrid'},
  ]
  const selectedPerson = ref(pages[0])

  function changePage(link){
    router.push(link)
  }
</script>

<template>
  <div class="flex bg-my-primarydark  justify-between items-center">
    <router-link class="home  menu" to="/">Home</router-link>
    <div class=" hidden sm:flex">
      <router-link class="home" to="/serchName">Search by name</router-link>
      <router-link class="home" to="/sortLetter/a">Search by  letter</router-link>
      <router-link class="home" to="/alcoholCocktail">Alcohol-cocktail</router-link>
      <router-link class="home" to="/mealsLands">Search by land</router-link>
      <router-link class="home menu" to="/searchIngrid">Search ingridient</router-link>
    </div>
    <div class="sm:hidden" >
      <Listbox  v-model="selectedPerson">
        <ListboxButton class="item-menu">{{ selectedPerson.name }}</ListboxButton>
        <ListboxOptions class="absolute z-10 mt-1">

          <ListboxOption
          class="item-menu"
            v-for="page in pages"
            :key="page.id"
            :value="page"
            :disabled="page.unavailable"
            @click="changePage(page.link)"
          >
            {{ page.name }}
          </ListboxOption>

        </ListboxOptions>
      </Listbox>
    </div>
  </div>
</template>



<style >

.home{
  @apply align-baseline bg-my-accent hover:bg-blue-400 text-white font-bold py-2 px-1 border-b-4 text-sm border-my-accentdark hover:border-blue-500 rounded ml-2 
  sm:h-12 sm:px-1 sm:py-3 
  md:h-16 md:text-center  flex items-center
}

.item-menu{
  @apply bg-my-accent px-10 py-2  border-b-4 border-my-accentdark  rounded  text-sm w-56 font-bold text-white z-20 tracking-tight mx-1
}

.menu{
  @apply mx-1
}


</style>