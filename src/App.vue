<template>
  <v-app id="app">
    <v-navigation-drawer app v-model="drawer" clipped>
      <v-container>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              メニュー
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list nav>
          <v-list-item v-for="list in lists"  :key="list.name" :to="list.link">
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
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="title center">（タイトル）</v-toolbar-title>
    </v-app-bar>
    <v-main id="main">
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
export default {
  data () {
    return {
      drawer: null,
      lists: [
        { name: 'トップページ', icon: 'mdi-view-dashboard', link: '/' },
        { name: 'マイページ', icon: 'mdi-account', link: '/mypage' },
        { name: 'RTAタイマー', icon: 'mdi-clock', link: '/rta' },
        { name: 'アプリ説明', icon: 'mdi-information-outline', link: '/about' }
      ]
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#main {
  /* background: url("assets/XXXXX.png"); */
  background-size: cover;
  background-position: center;
  width: auto;
  height: auto;
}
</style>
