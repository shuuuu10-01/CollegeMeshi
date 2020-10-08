<template>
    <v-card>
      <v-card-title>ダイアログタイトル</v-card-title>
      <v-card-actions>
        <v-row justify="center">
          <v-col cols="4">
            <h1>dialog</h1>
            <v-btn @click="isDialog=false">OK</v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
</template>

<script>
export default {
  data () {
    return {
      isDialog: true
    }
  }
}
</script>
