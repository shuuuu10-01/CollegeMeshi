<template>
    <v-dialog v-model="isDialog" width="600px">
      <v-card>
        <v-card-title>今回の自炊めし</v-card-title>
        <v-card-actions>
          <v-row justify="center">
            <v-col cols="4">
              <v-btn @click="isDialog=false">OK</v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      isDialog: false
    }
  }
}
</script>
