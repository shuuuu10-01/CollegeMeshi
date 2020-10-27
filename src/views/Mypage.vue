<template>
  <div class="mypage">
    <UserCard :username="user.username"/>
  </div>
</template>
<script>
import UserCard from '../components/Mypage/_UserCard.vue'

export default {
  data () {
    return {
      user: {
        username: 'USERNAME'
      }
    }
  },
  components: {
    UserCard
  }
}
</script>
