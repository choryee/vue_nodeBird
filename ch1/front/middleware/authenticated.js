// 로그인 했는지 검사.기존 유저이면, 프로필 클릭 안 됨. 3-2강
//페이지에 들어가기전에 사전 검사하는 것.

export default function ({store, redirect}){ //원래 function() 여기 매개변수는 context자리인데, 구조분해할당 한것.
    if( ! store.state.users.me){
        redirect('/');
    }

}