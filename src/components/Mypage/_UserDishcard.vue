<template>
  <div>
    <UserDialog ref="dlg" title="もやしの野菜炒め" times="3" role="1~2までの時間"/>
    <v-btn @click="openDialog" class="mt-5">仮カード</v-btn>
  </div>
</template>

<script>
import UserDialog from './__UserDialog.vue'
export default {
  methods: {
    openDialog () {
      this.$refs.dlg.isDialog = true
      this.$refs.dlg.image = this.image
      this.$refs.dlg.cooking = [
        { cook: '野菜の皮を剥きます' },
        { cook: 'にんじんを半月またはいちょう切り\n玉ねぎを薄切り\nピーマンをざく切り' },
        { cook: 'フランパンに薄く油をして、焼肉のたれで炒めて完成！' }
      ]
    }
  },
  components: {
    UserDialog
  },
  props: {
    image: String
  }
}
</script>
