// 원래 store에 정의된 것을 사용하는 .vue에서는 import store from './store.js'하고,export default {
//   store, // 이거해야, this.$store. 사용가능. 까지 넣어줘야 하는데, 지금 nuxt를 사용해서, 이 과정을 자동으로 해주는 것.

export const state=()=>({
    mainPosts: [],
    hasMorePost: true, // 3-4강. 인피니티 스크롤이 준비하기.
});

const totalPosts= 31;
const limit= 10;

//2-4강.
export const mutations={
    addMainPost(state, payload){
        state.mainPosts.unshift(payload);
    },
    removeMainPost(state, payload){
        const index = state.mainPosts.findIndex(v=>v.id === payload.id);
        state.mainPosts.splice(index,1);
    },
    addComment(state, payload){
        const index = state.mainPosts.findIndex(v=>v.id === payload.postId);
        state.mainPosts[index].Comments.unshift(payload);
    },
    loadPosts(state){ // 3-4강. 인피니티 스크롤이 준비하기.
        const diff = totalPosts - state.mainPosts.length; // 3-5강
        const fakePosts=Array(diff > limit ? limit : diff).fill().map(v=>({
            id:Math.random().toString(),
            User:{
                id:1,
                nickname:'choryee',
            },
            content:`hello infinite scrolling ${Math.random()}`,
            Comments:[],
            Images:[]
        }));
        state.mainPosts = state.mainPosts.concat(fakePosts);
        state.hasMorePost = fakePosts.length === limit;
    }
}

export const actions={
    add({commit}, payload){
        //commit('posts/addMainPost'); 같은 파일안에서는 posts생략가능.
        console.log(' posts/addMainPost\'  payload>>>',  payload);
        commit('addMainPost', payload);
    },
    remove({commit}, payload){
        commit('removeMainPost',payload);
    },
    addComment({commit}, payload){
        commit('addComment', payload);
    },
     loadPosts({commit,state}, payload){  // 3-4강. 인피니티 스크롤이 준비하기.
        if(state.hasMorePost){
            commit('loadPosts');
        }
     }
}