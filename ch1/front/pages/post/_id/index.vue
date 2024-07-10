//3-3강.
// post/_id/index.vue 나 그냥, post/_id.vue나 같은 기능함.

<template>
  <v-container v-if="post">
    <post-card :post="post" />
  </v-container>
  <div v-else>
    해당 아이디의 게시글이 존재하지 않습니다. post/_id/index.vue
  </div>
</template>

<script>
import PostCard from '~/components/PostCard';

export default {
  components: {
    PostCard,
  },
  computed: {
    post() {
      return this.$store.state.posts.mainPosts.find(v => v.id === parseInt(this.$route.params.id, 10));
    },
  },
};
</script>

<style>

</style>