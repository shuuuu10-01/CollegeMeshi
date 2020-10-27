<template>
  <div>
    <h1>サインアップ</h1>
    <v-form
      v-model="valid"
      @submit.prevent="submit">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              ref="name"
              v-model="name"
              :rules="[() => !!name || 'This field is required']"
              :error-messages="errorMessages"
              label="ユーザー名"
              required
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="password"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show ? 'text' : 'password'"
              name="input-10-1"
              label="パスワード"
              counter
              @click:append="show = !show"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-btn
          :disabled="!formIsValid"
          color="primary"
          type="submit"
        >
          サインイン
        </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    show: false,
    name: '',
    email: '',
    password: '',
    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters',
      emailMatch: () => (
        'The email and password you entered don`t match'
      )
    },
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters'
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ]
  }),
  computed: {
    formIsValid () {
      return (
        this.email &&
        this.password &&
        this.name
      )
    }
  }
}
</script>
