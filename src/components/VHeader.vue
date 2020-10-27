<template>
  <div>
    <v-navigation-drawer app v-model="drawer" clipped>
      <v-container>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title> メニュー </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list nav>
          <v-list-item v-for="list in lists" :key="list.name" :to="list.link">
            <v-list-item-icon>
              <v-icon>{{ list.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ list.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-container>
    </v-navigation-drawer>
    <v-app-bar color="primary" dark app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="title center">（タイトル）</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn depressed @click="signin" color="primary">サインイン</v-btn>
      <v-btn depressed @click="signup" color="primary">サインアップ</v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: null,
      lists: [
        { name: 'トップページ', icon: 'mdi-view-dashboard', link: '/' },
        { name: 'マイページ', icon: 'mdi-account', link: '/mypage' },
        { name: '料理を探す', icon: 'mdi-food', link: '/search' },
        { name: 'RTAタイマー', icon: 'mdi-clock', link: '/rta' },
        { name: 'アプリ説明', icon: 'mdi-information-outline', link: '/about' }
      ]
    }
  },
  methods: {
    signin () {
      this.$router.push('/signin')
    },
    signup () {
      this.$router.push('/signup')
    }
  }
}
</script>
