<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>自炊RTA スタート！！</h1>
        <br/>
        <h2>ストップウォッチ</h2>
        <h1>
        {{ hours }} :
        {{ minutes | zeroPad }} :
        {{ seconds | zeroPad }} :
        {{ miliSeconds | zeroPad(3) }}</h1>
        <br/>
        <v-btn @click="startTimer" class="button">スタート</v-btn>
        <v-btn @click="stopTimer" class="button">ストップ</v-btn>
        <v-btn @click="clearAll" class="button">リセット</v-btn>
        <br/>
        <v-btn @click="openDialog" class="complete-btn">できあがり！</v-btn>
        <DialogCard  ref="dlg"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DialogCard from '@/components/DialogCard.vue'
export default {
  data () {
    return {
      animateFrame: 0,
      nowTime: 0,
      diffTime: 0,
      startTime: 0,
      isRunning: false,
      isStopping: false
    }
  },
  components: {
    DialogCard
  },
  methods: {
    openDialog () {
      if (this.isStopping === true) {
        this.$refs.dlg.hours = this.hours
        this.$refs.dlg.minutes = this.minutes
        this.$refs.dlg.seconds = this.seconds
        this.$refs.dlg.miliSeconds = this.miliSeconds
        this.$refs.dlg.isDialog = !this.$refs.dlg.isDialog
      }
    },
    // 現在時刻から引数に渡した数値を startTime に代入
    setSubtractStartTime: function (time) {
      var time1 = typeof time !== 'undefined' ? time : 0
      this.startTime = Math.floor(performance.now() - time1)
    },
    // タイマーをスタートさせる
    startTimer: function () {
      if (this.isRunning === false) {
        this.isStopping = false
        // loop()内で this の値が変更されるので退避
        var vm = this
        vm.setSubtractStartTime(vm.diffTime);
        // ループ処理
        (function loop () {
          vm.nowTime = Math.floor(performance.now())
          vm.diffTime = vm.nowTime - vm.startTime
          vm.animateFrame = requestAnimationFrame(loop)
        }())
        vm.isRunning = true
      }
    },
    // タイマーを停止させる
    stopTimer: function () {
      if (this.isRunning === true) {
        this.isRunning = false
        this.isStopping = true
        cancelAnimationFrame(this.animateFrame)
      }
    },
    // 初期化
    clearAll: function () {
      this.startTime = 0
      this.nowTime = 0
      this.diffTime = 0
      this.stopTimer()
      this.animateFrame = 0
      this.isStopping = false
    }
  },
  computed: {
    // 時間を計算
    hours: function () {
      return Math.floor(this.diffTime / 1000 / 60 / 60)
    },
    // 分数を計算 (60分になったら0分に戻る)
    minutes: function () {
      return Math.floor(this.diffTime / 1000 / 60) % 60
    },
    // 秒数を計算 (60秒になったら0秒に戻る)
    seconds: function () {
      return Math.floor(this.diffTime / 1000) % 60
    },
    // ミリ数を計算 (1000ミリ秒になったら0ミリ秒に戻る)
    miliSeconds: function () {
      return Math.floor(this.diffTime % 1000)
    }
  },
  filters: {
    // ゼロ埋めフィルタ 引数に桁数を入力する
    // ※ String.prototype.padStart() は IEじゃ使えない
    zeroPad: function (value, num) {
      var num1 = typeof num !== 'undefined' ? num : 2
      return value.toString().padStart(num1, '0')
    }
  }
}
</script>

<style scoped>
.button {
  margin: 5px;
}
.complete-btn {
  margin-top: 20px;
}
</style>
