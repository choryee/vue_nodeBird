<template>
  <v-card style="margin-bottom: 20px">
    <v-container>
      <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
        <v-textarea
            v-model="content"
            outlined
            auto-grow
            clearable
            label="어떤 신기한 일이 있었나요?"
            :hide-details="hideDetails"
            :success-messages="successMessages"
            :success="success"
            :rules="[v => !!v.trim() || '내용을 입력하세요.']"
            @input="onChangeTextarea"
        />
        <v-btn type="submit" color="green" absolute right>짹짹</v-btn>
        <v-btn>이미지 업로드</v-btn>
      </v-form>
    </v-container>
  </v-card>
</template>

<script>
import {mapState} from 'vuex';

export default {
  data(){
    return{
      content:'',
      valid:false,
      hideDetails:false,
      successMessages:'',
      success:false
    }
  },

  computed:{
   // ...mapState(['users/me']); 아래와 같은것.
    ...mapState('users', ['me'])
  },

  methods: {
    onChangeTextarea(value){
      // <!--            :rules="[v => !!v.trim() || '내용을 입력하세요.']"--> 위 textarea에 들어가야 하는데, 에러 나서 뺌.

      if(value.length){
        this.hideDetails=false;  // textarea폼과 바로 버튼 사이의 공간. 2-4강.
        this.success=false;
        this.successMessages='';
      }
    },
    onSubmitForm(){
      if(this.$refs.form.validate()){
        this.$store.dispatch('posts/add', {
          content: this.content,
          User:{
            nickname: this.me.nickname,
          },
          Comments:[],
          Images:[],
          id:Date.now(),
          createdAt: Date.now()
        })
            .then(()=>{
              this.content='';
              this.hideDetails=false;
              this.success=true;
              this.successMessages='게시글 등록 성공!';
            })
            .catch(()=>{

            })
      }
    }

      }
}
</script>