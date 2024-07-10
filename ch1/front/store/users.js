// 원래 store에 정의된 것을 사용하는 .vue에서는 import store from './store.js'하고,export default {
//   store, // 이거해야, this.$store. 사용가능. 까지 넣어줘야 하는데, 지금 nuxt를 사용해서, 이 과정을 자동으로 해주는 것.

export const state=()=>({
    me : null,
    followerList:[],
    followingList:[],
    hasMoreFollower:true,
    hasMoreFollowing:true
});

const totalFollowers = 8;
const totalFollowings = 6;
const limit =3;


export const mutations={ // mutations에는 비동기 작업 불가, actions에서 해야.
    //  state안의 데이터들을 바꿀때는 mutations으로 바꾸어야.
    setMe(state, payload){
        state.me = payload;
    },
    changeNickname(state, payload){
        state.me.nickname = payload.nickname;
    },
    addFollower(state, payload) {// 3-1강.
        state.followerList.push(payload);
    },
    addFollowing(state, payload) {
        state.followingList.push(payload);
    },
    removeFollower(state, payload) {
        const index = state.followerList.findIndex(v => v.id === payload.id);
        state.followerList.splice(index, 1);
    },
    removeFollowing(state, payload) {
        const index = state.followingList.findIndex(v => v.id === payload.id);
        state.followingList.splice(index, 1);
    },

    loadFollowings(state) {// 3-7강.
        const diff = totalFollowings - state.followingList.length;
        const fakeUsers = Array(diff > limit ? limit : diff).fill().map(v => ({
            id: Math.random().toString(),
            nickname: Math.floor(Math.random() * 1000),
        }));
        state.followingList = state.followingList.concat(fakeUsers);
        state.hasMoreFollowing = fakeUsers.length === limit;
    },

    loadFollowers(state) {
        const diff = totalFollowers - state.followerList.length;
        const fakeUsers = Array(diff > limit ? limit : diff).fill().map(v => ({
            id: Math.random().toString(),
            nickname: Math.floor(Math.random() * 1000),
        }));
        state.followerList = state.followerList.concat(fakeUsers);
        state.hasMoreFollower = fakeUsers.length === limit;
    },

};

export const actions={ //비동기적 작업 하는 곳. store의 state, mutations등을 실행시킬수도 있다.
    // {commit}는 context안에 있는 것을 구조분해 할당한 것. 2-2강.
    // 서버 통신 할거면, actions로 만들라. 여기서 서버요청 보내는 것.
    signUp({commit}, payload){ // context안에는 commit, dispatch, state, rootState, getters, rootGetters
        // 서버에 회원가입 요청을 보내는 부분
        commit('setMe', payload);
    },
    logIn({commit}, payload){
        commit('setMe', payload);
    },
    logOut({commit}, payload){
        commit('setMe', null);
    },
    changeNickname({commit}, payload){
        commit('changeNickname', payload);
    },
    addFollowing({ commit }, payload) {
        commit('addFollowing', payload);
    },
    addFollower({ commit }, payload) {
        commit('addFollower', payload);
    },
    removeFollowing({ commit }, payload) {
        // 비동기 요청
        commit('removeFollowing', payload);
    },
    removeFollower({ commit }, payload) {
        commit('removeFollower', payload);
    },
    loadFollowers({commit, state}, payload){
        if(state.hasMoreFollower) commit('loadFollowers');
    },
    loadFollowings({commit, state}, payload){
        if(state.hasMoreFollowing) commit('loadFollowings');
    }
}