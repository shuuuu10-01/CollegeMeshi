<template>
  <v-dialog v-model="isDialog" max-width="600px">
    <v-card>
      <v-icon @click="isDialog=false" large class="mt-2">mdi-close-circle-outline</v-icon>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-img :src="image"/>
          </v-col>
          <v-col cols="12">
            <v-card-title>{{ title }}</v-card-title>
            <v-divider></v-divider>
            <v-card-subtitle class="text-right">今までに作った回数 {{ times }}回</v-card-subtitle>
          </v-col>
        </v-row>
        <p class="text-left ml-3" style="font-size:15px">使用食材</p>
        <v-divider></v-divider>
        <v-row>
          <v-col class="text-left">
            <v-btn class="mx-1 my-2" depressed rounded>にんじん</v-btn>
            <v-btn class="mx-1 my-2" depressed rounded>玉ねぎ</v-btn>
            <v-btn class="mx-1 my-2" depressed rounded>ピーマン</v-btn>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-card class="ml-2 mt-2" width="95%" outlined>
          <v-row>
            <v-col class="text-left ml-2">
              <p style="font-size:17px" class="ml-2">作り方</p>
              <ol>
              <li v-for="number in cooking" :key="number.cook" class="mb-2">{{ number.cook }}</li>
              </ol>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="text-left ml-2">
              <p style="font-size:17px" class="ml-2">RTAの定義</p>
              <ul>
              <li>{{ role }}</li>
              </ul>
            </v-col>
          </v-row>
        </v-card>
        <v-layout row>
          <v-flex justify-center>
            <v-btn primary class="ma-5">
              Let's Cooking
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      isDialog: false,
      image: '',
      cooking: []
    }
  },
  props: {
    title: String,
    times: String,
    role: String
  }
}
</script>

<style scoped>
li {
  white-space: pre-wrap;/* \nで改行してくれる*/
}
v-btn {
  margin: auto;
}
</style>
