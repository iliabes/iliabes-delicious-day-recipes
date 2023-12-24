<template >
<div class="bg-my-primary h-auto">
  <top-menu/>
    <router-view />
</div>
</template>


<script >
  import topMenu from './components/topMenu.vue'




  export default{


    data(){
      return {

      }},
    computed:{},

    methods: {

    },


    components:{
      topMenu
    }
  }

</script>





<style scoped>

</style>
