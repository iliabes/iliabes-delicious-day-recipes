<script setup>
  import { onMounted } from "vue";
  import {axiosClient} from "../axiosClient";



  // onMounted(async()=>{
  //   axiosClient.get(`lookup.php?i=${333}`)
  //   // let bla = axiosClient.get('list.php?i=list')
  //     // .then(({data})=>{console.log(data)})
  // })

    onMounted(async()=>{
    axiosClient.get(`list.php?i=list`)
    .then(({data})=>{
      console.log(data)

    })
  })
</script>




<template>
  <div class="flex justify-center mt-10 mx-5">
    <input type="text" class="border-2 border-grey-200 w-full" />
  </div>
</template>
  

<style>

</style>