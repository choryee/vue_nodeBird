<template>
  <v-form ref="form" v-model="valid" style="position: relative" @submit.prevent="onSubmitForm">
    <v-textarea
      v-model="content"
      filled
      auto-grow
      lable="댓글 달기"
      :hide-details="hideDetails"
      :success="success"
      :success-messages="successMessages"
      @input="onChangeTextarea"
    />
    <v-btn color="green" dark absolute top right type="submit">댓글버튼</v-btn>

  </v-form>
</template>
<script>
export default {
  props:{
    postId:{
      type:String,
      required:true
    }
  },
  data(){
    return {
      valid:false,
      content:'',
      success:false,
      successMessages:'',
      hideDetails:true
    }
  },
  computed:{
    me(){
      return this.$store.state.users.me;
    }
  },
  methods:{
    onChangeTextarea(value) {
      if(value.length){
        this.hideDetails=false;
        this.success=false;
        this.successMessages='';
      }
    },
    onSubmitForm(){
      if(this.$refs.form.validate){
        this.$store.dispatch('posts/addComment', {
          id:Date.now(),
          postsId:this.postId,
          content:this.content,
          User:{
            nickname: this.me.nickname
          }
        })
            .then(()=>{
              this.content='';
              this.hideDetails=false;
              this.success=true;
              this.successMessages='댓글 등록 성공!';
            })
            .catch(()=>{

            })

      }
    }
  }
}
</script>