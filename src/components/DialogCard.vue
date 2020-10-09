<template>
  <v-dialog v-model="isDialog" width="600px">
    <v-card>
      <v-card-title>今回の自炊めし</v-card-title>
      <v-card-actions>
        <v-row justify="center">
          <v-col cols="11">
            <v-text-field
              class="text-field"
              v-model="title"
              label = "ご飯タイトル"
              required
            ></v-text-field>
            <v-text-field
              class="text-field"
              v-model="introduce"
              label = "簡単な料理紹介"
              required
            ></v-text-field>
            <v-select
                class="text-field"
                v-model="cost"
                :items="['0〜10円', '11~30円', '31~100円', '101~200円','201~500円','今日は贅沢しちゃった！！']"
                label="かかったお金"
                required
            ></v-select>
            <v-text-field
              class="text-field"
              label = "タイム"
              v-model="time"
              disabled
              required
            ></v-text-field>
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
      title: '',
      introduce: '',
      cost: '',
      time: '',
      isDialog: false
    }
  }
}
</script>

<style scoped>
.text-field {
  margin: 20px;
}
</style>
