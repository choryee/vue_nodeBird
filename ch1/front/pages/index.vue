<template>
  <div>
    <div>
      <post-card/>
      <post-card/>
      <post-card/>
      <post-card/>
      <post-card/>
    </div>
  </div>

</template>

<script>
import PostCard from '../components/PostCard.vue'

export  default {
  components:{
    PostCard,
  },
  data(){
    return {
      name: 'aaa'
    }
  }
}
</script>

<style>

</style>