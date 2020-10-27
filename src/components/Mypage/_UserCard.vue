<template>
  <div>
    <v-card
      class="mx-auto mt-5"
      max-width="500"
    >
      <v-icon
        large
        class="mt-3"
      >mdi-account-circle</v-icon>
      <v-card-subtitle>{{ username }}</v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    username: String
  }
}
</script>
