<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input
          type="text"
          v-model="user.firstName"
          name="firstName"
          class="form-control"
          :class="{ 'is-invalid': submitted && !user.firstName}"
        />
        <div v-if="submitted && !user.firstName" class="invalid-feedback">First is required</div>
      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input
          type="text"
          v-model="user.lastName"
          name="lastName"
          class="form-control"
          :class="{ 'is-invalid': submitted && !user.lastName}"
        />
        <div v-if="submitted && !user.lastName" class="invalid-feedback">{{ lastName}}</div>
      </div>
      <div class="form-group">
        <label for="username">email</label>
        <input
          type="text"
          v-model="user.email"
          name="email"
          class="form-control"
          :class="{ 'is-invalid': submitted && !user.email}"
        />
        <div v-if="submitted && !user.email" class="invalid-feedback">Valid email is required</div>
      </div>
      <div class="form-group">
        <label for="street">Street</label>
        <input
          type="text"
          v-model="user.street"
          name="street"
          class="form-control"
          :class="{ 'is-invalid': submitted && !user.street}"
        />
        <div v-if="submitted && !user.street" class="invalid-feedback">Street is required</div>
      </div>
      <div class="form-group">
        <label for="city">City</label>
        <input
          type="text"
          v-model="user.city"
          name="city"
          class="form-control"
          :class="{ 'is-invalid': submitted && !user.city}"
        />
        <div v-if="submitted && !user.city" class="invalid-feedback">City is required</div>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          v-model="user.password"
          name="password"
          class="form-control"
          :class="{ 'is-invalid': submitted && !user.password}"
        />
        <div v-if="submitted && !user.password" class="invalid-feedback">Password is required</div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Register</button>
        <router-link to="/login" class="btn btn-link">Cancel</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        password: ''
      },
      submitted: false
    }
  },
  computed: {},
  methods: {
    async handleSubmit (e) {
      this.submitted = true
      // this.$validator.validate().then(async valid => {
      if (this.user.email && this.user.password) {
        this.$store
          .dispatch('register', this.user)
          .then(() => this.$router.push('/'))
          .catch(err => console.log(err))
        // const response = await this.axios.post(
        //   'http://localhost:5000/auth/register',
        //   this.user
        // )
        // if (response.data.token.token) {
        //   // store user details and jwt token in local storage to keep user logged in between page refreshes
        //   this.$store.token = response.data.token.token
        // }
        // this.$router.push('posts')
      }
      // })
    }
  }
}
</script>
