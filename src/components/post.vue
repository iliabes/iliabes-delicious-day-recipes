<script >
import myBtn from './UI/myBtn.vue';
import mixin from '../mixins/mixin.js'
export default {
components: { myBtn },
data() {
    return {
        
    };
    },
    props: {
        id:Number,
        title: String,
        body: String
    },
    methods:{
        del(){
            this.log(777)
            this.$emit('remove',this.id)
        },
        openPost(){
        this.$router.push(`./posts/${this.id}`)
    },
    },
    mixins:[mixin]

};


</script>


<template>
  <div class="post">
    <div>
        <h2 class="post_title">{{ title }}</h2>
        <p class="post_text">{{ id }}</p>
        <p class="post_text">{{ body }}</p>
    </div>
    <my-btn @click="openPost" class="post_btn">open</my-btn>
    <my-btn @click="del" class="post_btn">delete</my-btn>
  </div>
</template>

<style scoped>
    .post{
        padding: 5px;
        border-bottom: 1px solid #000;
        margin-bottom: 5px;
        background-color: rgb(186, 219, 205);
        border-radius: 3px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .post_title{
        font-size: 24px;
        font-weight: bold;
    }
    .post_btn{
        background-color: rgb(222, 94, 94);
        padding: 5px 15px;
    }
</style>
../mixins/mixin.js