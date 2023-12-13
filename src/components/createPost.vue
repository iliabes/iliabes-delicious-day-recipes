<template>
    <div class="create">
        <my-input v-model.trim="titlePost" type="text" />
        <my-input v-model="textPost"  type="text" />
        <myBtnVue @click="createPost">Создать</myBtnVue>
    </div>
</template>



<script>
import myBtnVue from './UI/myBtn.vue';
export default {
    data(){
        return{
            titlePost:'',
            textPost:'',
        }
    },
    methods:{
        createPost(){
            let myPost = {
                id:Date.now,
                title:this.titlePost,
                text:this.textPost
            }
            this.$emit('createMyPost',myPost)
            this.titlePost = ''
            this.textPost = ''
            console.log('create in create')
        }
    },
    components:{
        myBtnVue
    }
};
</script>

<style>
.create {
    display: flex;
    flex-direction: column;
    width: 300px;
}
</style>

