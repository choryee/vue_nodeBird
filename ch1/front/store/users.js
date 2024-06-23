export const state=()=>({
    me : null,
});

export const mutations={ // mutations에는 비동기 작업 불가, actions에서 해야
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