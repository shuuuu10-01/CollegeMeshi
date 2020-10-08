<template>
  <v-container>
    <v-row>
      <v-col>
        <img alt="logo" src="../assets/logo.png" class="image">
        <br/>
        <v-btn @click="start">スタート</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    start () {
      this.$router.push('/rta')
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
