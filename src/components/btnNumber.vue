

<template>
    <div  class="container">
        <!-- <ul class="pagination">
            <li class="waves-effect" v-for="item in btnNumb" @click="define(item)"  :key="item"> <p><a href="#!"></a></p></li>
        </ul> -->
    <ul class="pagination">
    <li class="waves-effect" :class="{'active':item === page}" v-for="item in btnNumb" @click="define(item)"  :key="item"><a href="#!">{{item}}</a></li>
    </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                page:''
            }
        },
        
        methods:{
            define(e){
            this.page=e
            console.log('page',this.page)
            this.$emit("updateNumberPage",this.page)
            }
        },
        props:{
            btnNumb: Number,
            numberPage:Number
        }
        }

    
</script>

<style>

</style>