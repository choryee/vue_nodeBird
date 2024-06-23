nodeBird만들기  240621시작. 심한 장마 시작일에~~

https://github.com/ZeroCho/vue-nodebird


실행은 npm run dev
위는 package.json의
 "scripts": {
     "dev": "nuxt"
   }, 부분임.


nuxt - vue,js의 프레임워크로, vue 작업을 쉽게 해주는 것.

기술스택
Mysql @5.7
vue.js @2, Nuxt@2



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
async/await로 바뀌써도 무방. 대신,await부분은 try-catch()해줘야. 왜냐면, 에러처리해야 해서. 2-3강. 14'00