<template>
  <v-container>
    <v-row>
      <v-col>
        <img alt="logo" src="../assets/logo.png" class="image">
        <br/>
        <h1>自炊RTA</h1>
        <v-btn @click="signin" class="ma-5">サインイン</v-btn>
        <v-btn @click="signup" class="ma-5">サインアップ</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    signin () {
      this.$router.push('/signin')
    },
    signup () {
      this.$router.push('/signup')
    }
  }
}
</script>

<style scoped>
.image{
  padding-top: 5px;
  padding-bottom: 50px;
}
</style>
