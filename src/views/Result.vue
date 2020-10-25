<template>
  <v-container>
    <v-row>
      <v-col>
        <v-title>今回の自炊結果！
        </v-title>
        <v-btn @click="start">トップへ移動</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    start () {
      this.$router.push('/')
    }
  }
}
</script>
