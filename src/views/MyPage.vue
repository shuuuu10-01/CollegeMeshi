<template>
  <div class="mypage">
    <h1>マイページ</h1>
    <v-card
      color="light-blue lighten-5"
    >
      <v-icon
        large
      >mdi-account-circle</v-icon>
      <h1>USERNAME</h1>
    </v-card>
    <v-card
      color="grey lighten-4"
    >
      <h2>今までの投稿飯の記録</h2>
    </v-card>
    <v-fab-transition>
      <v-btn
        color="pink"
        fab
        large
        dark
        absolute
        bottom
        right
        class="v-btn--example"
        @click=search
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>
<script>
export default {
  methods: {
    search () {
      this.$router.push('/search')
    }
  }
}
</script>
<style scoped>
  .v-btn--example {
    bottom: 0;
    position: absolute;
    margin: 0 0 32px 0px;
  }
</style>
