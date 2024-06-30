vue_nodeBird만들기  240621시작. 심한 장마 시작일에~~

https://github.com/ZeroCho/vue-nodebird

http://localhost:3000
실행은 npm run dev ( cd ch1/front에서)
위는 package.json의
 "scripts": {
     "dev": "nuxt" <--  "scripts"부분에 넣어 주는게, npm run 뒤에 붙는 이름 됨.
   }, 부분임.


nuxt <- vue,js의 프레임워크로, vue 작업을 쉽게 해주는 것. 아래의 기능들을 자동으로 해줌.
- 원래 store에 정의된 것을 사용하는 .vue에서는
import store from './store.js'하고,
export default {
store, // 이거해야, this.$store. 사용가능.  <-- 이거까지 넣어줘야 하는데,
 }
 (위 tictactoe.vue에서)
 지금 nuxt를 사용해서, 이 과정을 자동으로 해주는 것.
- 왼쪽 pages아래 profile.vue이름은 자동으로 http://localhost:3000/profile 처럼 라우팅 해줌.


기술스택
Mysql @5.7
vue.js @2,
Nuxt@2




------------------------------------------------------------------------------------------
 <nuxt/> <--이건 <router-view/>역할 하는 것.

1-4강.
vuetity - boostrap같이 디자인 하는 쉽게 하라고, 이미 만들어진 것.

1-5강.
<nuxt-link to="/profile">Home</nuxt-link>
to="/profile"는 <a> 기능임.

 <nuxt/> <--이건 <router-view/>역할 하는 것.

 1-7강.
 <v-container>
 </v-container> <-- 패딩들어간 container. 안 그러면, 옆 요소와 다닥다닥붙어있어서.

1-8강. 폼 검증하기.
$refs는 태그 요소 선택하는 것.

vuetify에서 checkBox, textfield 부분의 내용을 검증해주는 자체 기능을 제공해준다.
원래라면, 개발자가 개발해야.
if (this.$refs.form.validate()) { //validate()도 vuetify가 제공해주는 것. 위 valid의 참거짓 상태확인.

1-9강. eslint도입
- 협업시 다른 개발자와 코딩스타일 강제하기.
npm run lint <--- 터미널창에 코딩스타일 확인용으로만


2-3강. 로그인/회원가입 더미 데이터 만들기.
mutations, actions는 users.js의 주석을 보라.

this.$store.dispatch('users/signup', { // dispatch는 store의 actions실행하는 것.
})

onSubmitForm() {
  if (this.$refs.form.validate()) { //validate()도 vuetify가 제공해주는 것. 위 valid의 참거짓 상태확인.
    this.$store.dispatch('users/signup', { // dispatch가 비동기여서, a가 먼저 실행및종료되어, /로 이동해버릴수 있어, 순서를 바르게 해야.
      nickname: this.nickname,
      email: this.email
    });
  this.$router.push({ <--a
    path:'/',
  })
---

if (this.$refs.form.validate()) { //validate()도 vuetify가 제공해주는 것. 위 valid의 참거짓 상태확인.
    this.$store.dispatch('users/signup', {
      nickname: this.nickname,
      email: this.email
    })
        .then(()=>{ // dispatch자체가 promise라서, 이렇게 해야, 순서가 잡힌다.
          this.$router.push({
            path:'/',
          })
--
위 .dispatch()가 promise처럼 비동기인것은, async 함수명(){ const result=await this.~~}처럼
async/await로 바뀌써도 무방. 대신, 아래처럼 await부분은 try-catch()해줘야. 왜냐면, 에러처리해야 해서. 2-3강. 14'00

async onSubmitForm() {
  if (this.$refs.form.validate()) {
   try{
    const result = await this.$store.dispatch('users/signup', {
      nickname: this.nickname,
      email: this.email
    });
  }catch(err){

  }
  })

 2-4강. 게시글 작성 폼 만들기.
 parameter.sms_yn = this.sms_yn || "N"; // sms설정 값 없는경우 default 값
 ( this.sms_yn가 있으면, 그것을 사용하는데,) this.sms_yn가 거짓이여야(일때), parameter.sms_yn키에 "N"를 대입할 것이다. 의미
 ->  this.sms_yn가 있으면 이거한다, 하지만 없으면 뒤에것 한다.

 PostForm.vue
 :rules="[v => !!v.trim() || '내용을 입력하세요']"
 -> v의 공간을 제거한 것이 비어있을때,  '내용을 입력하세요'라고 표시한다.
 -> 빈칸 제거한후에, 안 비어야(한 글짜라도 있어야 한다). 아니면, 뒤에 것 한다.




