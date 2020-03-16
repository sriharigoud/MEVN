<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="email">email</label>
        <input
          type="text"
          v-model="email"
          name="email"
          class="form-control"
          :class="{ 'is-invalid': submitted && !email }"
        />
        <div v-show="submitted && !email" class="invalid-feedback">email is required</div>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          v-model="password"
          name="password"
          class="form-control"
          :class="{ 'is-invalid': submitted && !password }"
        />
        <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Login</button>
        <router-link to="/register" class="btn btn-link">Register</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import toast from '../helpers/toast'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      submitted: false
    }
  },
  methods: {
    handleSubmit (e) {
      this.submitted = true
      const { email, password } = this
      if (email && password) {
        this.$store
          .dispatch('login', { email, password })
          .then(() => {
            this.$router.push('/posts')
            toast.success('You are successfully logged in')
          })
          // .catch(err => console.log('Error'))
        // const response = await this.axios.post(
        //   'http://localhost:5000/auth/login',
        //   { email, password }
        // )
        // if (response.data.tokenData.token) {
        //   // store user details and jwt token in local storage to keep user logged in between page refreshes
        //   this.$store.token = response.data.tokenData.token
        // }
        // this.$router.push('posts')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
