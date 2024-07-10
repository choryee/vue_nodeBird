// 3-3강. 동적 라우팅.
//localhost:3000/post/11
// <-- pages/post폴더가 위 주소 일부가 됨.
// 게시글 1개만 보여주는 페이지 만드는 것. <-- 이 내용만 공유하고 싶을 때 사용하는 것.
// 12'40. _id폴더 만들고, 그 밑에 index.vue 만들어서,localhost:3000/post만 쳤을 때는, 페이지 안 보이게 하는 것함.

//밑은, post/_id/index.vue 나 그냥, post/_id.vue나 같은 기능해서, 파일이름을 변경함. _id.vue에서.

<template>
  <v-container v-if="post">
    <post-card :post="post"/>

  </v-container>
  <div v-else>해당 아이디의 게시글이  존재하지 않습니다. _id.vue </div>
</template>

<script>
import PostCard from "../../components/PostCard";
export default {
  components:{PostCard},
  computed:{
    post(){
      return this.$store.state.posts.mainPosts.find(v=>v.id === parseInt(this.$route.params.id, 10) )
    }
  }
}
</script>