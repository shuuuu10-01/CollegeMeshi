<template>
  <v-container fill-height>
    <v-row>
      <v-col>
        <h1>自炊RTA スタート！！</h1>
        <br/>
        {{checkHours | zeroPadding}}：{{checkMinutes | zeroPadding}}：{{checkSeconds | zeroPadding}}：{{checkMiliSeconds | showMiliseconds}}
        <br/>
        <v-btn @click="start">スタート</v-btn>
        <v-btn @click="stop">ストップ</v-btn>
        <v-btn @click="reset">リセット</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  date () {
    return {
      animationId: 0,
      hours: 0,
      minutes: 0,
      second: 0,
      milisecond: 0,
      startTime: 0,
      endTime: 0,
      diffTime: 0,
      flag: false
    }
  },
  filters: {
    zeroPadding (value) {
      return value.toString().padStart(2, 0)
    },
    showMiliseconds (value) {
      return value.toString().padStart(3, 0)
    }
  },
  methods: {
    setStartTime (time) {
      this.startTime = performance.now() - time
    },
    start () {
      if (this.flag) {
        return false
      }
      // eslint-disable-next-line camelcase
      const vm_data = this
      this.flag = true
      this.setStartTime(vm_data.diffTime);
      (function progress () {
        vm_data.endTime = performance.now()
        vm_data.diffTime = (vm_data.endTime - vm_data.startTime)
        vm_data.second = Math.floor(vm_data.diffTime / 1000)
        vm_data.milisecond = Math.floor(vm_data.diffTime % 1000)
        vm_data.animationId = window.requestAnimationFrame(progress)
      }())
    },
    stop () {
      this.flag = false
      window.cancelAnimationFrame(this.animationId)
    },
    reset () {
      if (this.flag) {
        return false
      }
      this.startTime = this.diffTime = 0
    }
  },
  computed: {
    checkHours () {
      console.log(this.second)
      return Math.floor(this.diffTime / 1000 / 60 / 60)
    },
    checkMinutes () {
      return Math.floor(this.diffTime / 1000 / 60) % 60
    },
    checkSeconds () {
      return Math.floor(this.diffTime / 1000) % 60
    },
    checkMiliSeconds () {
      return Math.floor(this.diffTime % 1000)
    }
  }
}
</script>
