<template>
  <div>
    <post-form v-if="me" />
    <div>
      <post-card v-for="p in mainPosts" :key="p.id" :post="p" />
    </div>
  </div>

</template>

<script>
import PostCard from '../components/PostCard.vue';
import PostForm  from "../components/PostForm.vue";

export  default {
  components:{
    PostCard,
    PostForm
  },
  data(){
    return {
      name: 'aaa'
    }
  },

  computed:{
    me(){
      return this.$store.state.users.me;
    },
    mainPosts(){
      console.log(' this.$store.state.posts.mainPosts >>>', this.$store.state.posts.mainPosts );
      return this.$store.state.posts.mainPosts;
    }
  }
}
</script>

<style>

</style>