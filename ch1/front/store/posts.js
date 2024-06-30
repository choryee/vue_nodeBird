// 원래 store에 정의된 것을 사용하는 .vue에서는 import store from './store.js'하고,export default {
//   store, // 이거해야, this.$store. 사용가능. 까지 넣어줘야 하는데, 지금 nuxt를 사용해서, 이 과정을 자동으로 해주는 것.

export const state=()=>({
    mainPosts: []
});

//2-4강.
export const mutations={
    addMainPost(state, payload){
        state.mainPosts.unshift(payload);
    }
}

export const actions={
    add({commit}, payload){
        //commit('posts/addMainPost'); 같은 파일안에서는 posts생략가능.
        commit('addMainPost');
    }
}