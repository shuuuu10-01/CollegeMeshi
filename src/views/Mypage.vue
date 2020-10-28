<template>
  <div class="mypage">
    <UserCard :username="user.username"/>
    <UserDish image="https://picsum.photos/id/11/500/300"/>
  </div>
</template>
<script>
import UserCard from '../components/Mypage/_UserCard.vue'
import UserDish from '../components/Mypage/_UserDishcard.vue'

export default {
  data () {
    return {
      user: {
        username: 'USERNAME'
      }
    }
  },
  components: {
    UserCard,
    UserDish
  }
}
</script>
