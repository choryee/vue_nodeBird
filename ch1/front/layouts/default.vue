
<template>
  <v-app>
    <nav>
      <v-toolbar dark color="green">
        <v-toolbar-title>
          <nuxt-link to="/">NodeBird</nuxt-link>
        </v-toolbar-title>
        <v-spacer />
        <v-toolbar-items>
          <v-form @submit.prevent="onSearchHashtag">
            <div :style="{ display: 'flex', height: '100%', alignItems: 'center' }">
              <v-text-field
                  v-model="hashtag"
                  label="검색"
                  hide-details
                  prepend-icon="mdi-magnify"
              />
            </div>
          </v-form>
          <v-btn text nuxt to="/profile" :style="{ display: 'flex', alignItems: 'center' }">
            <div>프로필</div>
          </v-btn>
          <v-btn text nuxt to="/signup" :style="{ display: 'flex', alignItems: 'center' }">
            <div>회원가입</div>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </nav>
    <v-row no-gutters>
      <v-col cols="12" md="4">
        <login-form />
      </v-col>
      <v-col cols="12" md="8">
        <nuxt />
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
// xs, sm,md,lg,xl
// cols가 xs라고 생각하라.그래서 22라인에 xs="12"생략가능.

import 'vuetify/dist/vuetify.min.css';
import LoginForm from "../components/LoginForm";


export default {
  components:{
    LoginForm
  },
  data(){
    return {
        hashtag:'',

    }
  },
  methods:{
    onSearchHashtag(){
      this.$router.push({
        path: `/hashtag/${this.hashtag}`
      });
      this.hashtag = '';
    }
  }
}
</script>

