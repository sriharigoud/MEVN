<template>
  <div class="container">
    <nav class="navbar navbar-expand navbar-light" style="background-color: #e3f2fd;">
      <router-link :class="'nav-brand'" to="/">postscircle</router-link>
      <ul class="navbar-nav mr-auto">
        <!-- <li class="nav-item" v-if="isLoggedIn">
          <router-link :class="'nav-link'" to="/posts">Posts</router-link>
        </li> http://localhost:5000/users/5e6283a2914f0012d8c0c2b7/posts 5e6283a2914f0012d8c0c2b7 -->
      </ul>
      <span>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" v-if="!isLoggedIn">
            <router-link  :class="'nav-link'" to="/login">Login</router-link>
          </li>

          <li class="nav-item" v-if="!isLoggedIn" >
            <router-link :class="'nav-link'" to="/register">Register</router-link>
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <a class="nav-link"  @click="logout">Logout</a>
          </li>
        </ul>
      </span>
    </nav>
    <router-view></router-view>
    <div class="footer-copyright text-center py-3">
      © 2020 Copyright:
      <a href="https://mdbootstrap.com/education/bootstrap/">postcirlce.com</a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout').then(() => {
        this.$router.push('/login')
      })
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
