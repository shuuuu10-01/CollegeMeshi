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
            <v-select
                class="text-field"
                v-model="timeframe"
                :items="['朝食', '昼食', '夕食']"
                label="時間帯"
                required
            ></v-select>
            <v-text-field
              class="text-field"
              label="タイム"
              v-model="time"
              disabled
              required
            ></v-text-field>
          </v-col>
          <v-col cols='10'>
          <v-btn @click="isDialog=false" class="btn">閉じる</v-btn>
          <v-btn @click="setResult" class="btn">いただきます</v-btn>
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
      timeframe: '',
      hours: 0,
      minutes: 0,
      seconds: 0,
      miliSeconds: 0,
      isDialog: false
    }
  },
  computed: {
    // 時間を計算
    time: function () {
      if (this.hours !== 0) {
        return String(this.hours) + '時間' + String(this.minutes) + '分' + String(this.seconds) + '秒' + String(this.miliSeconds)
      } else if (this.minutes !== 0) {
        return String(this.minutes) + '分' + String(this.seconds) + '秒' + String(this.miliSeconds)
      } else if (this.seconds !== 0) {
        return String(this.seconds) + '秒' + String(this.miliSeconds)
      } else {
        return 'おそろしく速い手刀。オレでなきゃ見逃しちゃうね'
      }
    }
  },
  methods: {
    setResult () {
      console.log('seccess')
      this.$router.push('/result')
    }
  }
}
</script>

<style scoped>
.text-field {
  margin: 20px;
}
.btn {
  margin-left: 25px;
  margin-right: 25px;
}
</style>
