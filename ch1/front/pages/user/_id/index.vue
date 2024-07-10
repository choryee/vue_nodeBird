//3-3강.
// post/_id/index.vue 나 그냥, post/_id.vue나 같은 기능함.

<template>
  <div>
    <div>
      <post-card v-for="p in mainPosts" :key="p.id" :post="p" />
    </div>
  </div>

</template>

<script>
import PostCard from '~/components/PostCard';


export  default {
  components: {
    PostCard,
  },
  data() {
    return {
      name: 'aaa'
    }
  },

  computed: {
    me() {
      return this.$store.state.users.me;
    },
    mainPosts() {
      //console.log(' this.$store.state.posts.mainPosts >>>', this.$store.state.posts.mainPosts);
      return this.$store.state.posts.mainPosts;
    },
    hasMorePost(){
      return this.$store.state.posts.hasMorePost;
    }
  },

  fetch({store}) { // 3-5강. fetch() 이거 자체가, vue의 객체임.
    store.dispatch('posts/loadPosts');
    // console.log('  store.dispatch(\'posts/loadPosts\'); >>>', store.dispatch('posts/loadPosts'));
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll); // 위했으면, 이거 해줘야. 메모리 누스 막음.
  },
  methods: {
    onScroll() {
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (this.hasMorePost) {
          this.$store.dispatch('posts/loadPosts');
        }
      }
    }
  }
}

</script>

<style>

</style>