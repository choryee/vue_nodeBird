// 원래 store에 정의된 것을 사용하는 .vue에서는 import store from './store.js'하고,export default {
//   store, // 이거해야, this.$store. 사용가능. 까지 넣어줘야 하는데, 지금 nuxt를 사용해서, 이 과정을 자동으로 해주는 것.

export const state=()=>({
    me : null,
});

export const mutations={ // mutations에는 비동기 작업 불가, actions에서 해야.
    //  state안의 데이터들을 바꿀때는 mutations으로 바꾸어야.
    setMe(state, payload){
        state.me = payload;
    }
};

export const actions={ //비동기적 작업. store의 state, mutations등을 실행시킬수도 있다.
    // {commit}는 context안에 있는 것을 구조분해 할당한 것. 2-2강.
    signUp({commit}, payload){ // context안에는 commit, dispatch, state, rootState, getters, rootGetters
        // 서버에 회원가입 요청을 보내는 부분
        commit('setMe', payload);
    },
    logIn({commit}, payload){
        commit('setMe', payload);
    },
    logOut({commit}, payload){
        commit('setMe', null);
    }
}