<template>
  <v-dialog v-model="isDialog" width="600px">
    <v-card>
      <v-container>
        <v-row>
          <v-col class="text-right">
            <v-icon large @click="isDialog=false">mdi-close-circle-outline</v-icon>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-img :src="image"/>
          </v-col>
          <v-col cols="8">
            <v-card-title>今回の自炊めし</v-card-title>
          </v-col>
        </v-row>
        <v-row>
          <v-card-actions>
            <v-row justify="center">
              <v-col cols="6">
                <v-img src="../../assets/logo.png"/>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      isDialog: false
    }
  },
  props: {
    image: String
  }
}
</script>
