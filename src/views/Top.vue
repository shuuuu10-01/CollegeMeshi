<template>
  <v-fab-transition>
    <v-btn
      color="pink"
      fab
      large
      dark
      absolute
      bottom
      right
      class="v-btn--example"
      @click="openDialog"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {
  data: () => ({
    // fab: false,
    // hidden: false,
    // tabs: null
  }),

  computed: {
  },
  methods: {
    openDialog () {
    }
  }
}
</script>

<style scoped>
.image {
  padding-top: 5px;
  padding-bottom: 50px;
}

  .v-btn--example {
    bottom: 0;
    position: absolute;
    margin: 0 0 32px 0px;
  }
</style>
