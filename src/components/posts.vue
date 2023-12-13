<template>
  <div class="container">


  <!-- <div class="app_btns">
    <my-btn @click="sortPostMax">sortPost</my-btn>
    <my-btn @click="showModal">create Posts!</my-btn>
    <my-select  :options='valueOptions' v-model="selectOption"></my-select>
  </div> -->


  <h2 v-if="this.appPost.length > 0" class="">Posts</h2>

  <div :post="sortPost"  class="posts" >
    <transition-group name="post-list" tag="p">  
      <post @remove="deletePost" v-for="post in appPost" :key="post"  :id="post.id" :title="post.title" :body="post.body"/>
    </transition-group>
  </div>

  <!-- <h1  class="title" v-if="!isPostLoading">Post download</h1> -->
  <!-- <btnNumber  :btnNumb=10 />    -->

</div>
</template>



<script >
  
  import createPost from './createPost.vue'
  import MyBtn from './UI/myBtn.vue'
  import btnNumber from './btnNumber.vue'
  import post from './post.vue'


  export default{
    props:{
      appPost:'',
    },
    data(){
      return {
        posts:this.appPost,
        selectOption:'decrease',
        titlePost: '',
        bodyPost: '',
        isPostLoading: false,

      }
    },
    computed:{
      sortedPosts(e){
            let sortedPost = [...this.appPost].filter((item)=>{
            let  integer = item.id % 2;
            if(this.selectOption === "increase"){
              return integer !== 0
            }
            return integer === 0
            
          })
          return sortedPost

        },

    },
    methods: {
      createPost1(e){
        let post = {
          id:Date.now(),
          body:e.text,
          title:e.title
        }
        this.appPost.push(post)
        this.modalVisible = false

      },
      deletePost(e){
        this.post = this.appPost.filter(p => p.id !== e)
      },
      sortPost(){
        console.log(this.posts)
        let sortedPost = this.posts.filter((item)=>{
            const integer = item.id % 2
            return integer === 0
        })
        this.posts = sortedPost
      },
      sortPostMax(){
        console.log(this.posts)
        let sortedPost = this.posts.filter((item)=>{
            const integer = item.id % 2
            return integer !== 0
        })
        this.posts = sortedPost

      },
      showModal(e){
        this.modalVisible = true
      },
    },
    mounted() {
      this.post = this.appPost
    },
    components:{
      post,
      createPost,
      MyBtn,
      btnNumber
    },

  }

</script>




<style scoped>

  .title{
    color:red
  }
  .container{
    padding:25px;
  }
  .posts{
    border-radius: 5px;
  }





  .post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active, .post-list-leave-active {
  transition: all .4s;
}
.post-list-enter, .post-list-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateX(130px);
}

.post-list-move {
  transition: transform 1s;
}


</style>
