<template>
  <div class="flex  justify-between h-16 bg-red-100 items-center">
    <router-link class="p-2 inline-flex items-center  rounded-md bg-orange-400 hover:bg-purple-500" to="/">Home</router-link>
    <div class="flex items-center gap-1">
      <router-link class="p-2 inline-flex items-center border-b rounded-md bg-orange-400  hover:bg-purple-400" to="/serch">serch by ingridient</router-link>
      <router-link class="p-2 inline-flex items-center border-b rounded-md bg-orange-400  hover:bg-purple-400" to="/sortIngridiebt">search by name</router-link>
      <router-link class="p-2 inline-flex items-center border-b rounded-md bg-orange-400  hover:bg-purple-400" to="/sortLetter">search by letter</router-link>
    </div>

  </div>
</template>

<script>

export default {

}
</script>

<style >

</style>