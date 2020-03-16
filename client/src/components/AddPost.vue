<template>
  <div>
    <b-card class="mt-3" header="Add Post">
       <router-link :class="'ml-auto'" to="/posts">Go back to post listings</router-link>
      <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group id="input-group-2" label="Title:" label-for="input-2">
          <b-form-input id="input-2" v-model="form.title" required placeholder="Enter title"></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Content:" label-for="input-2">
          <b-form-textarea
            id="textarea"
            v-model="form.content"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import toast from '../helpers/toast'

export default {
  name: 'Posts',
  data () {
    return {
      editing: false,
      form: {
        title: '',
        content: ''
      }
    }
  },
  mounted () {
    this.editing = false
    console.log(this.$route.params.id)
    if (this.$route.params.id) {
      this.editing = true
      this.axios
        .get(`http://localhost:5000/posts/${this.$route.params.id}`, this.form)
        .then(data => {
          this.form = data.data
        })
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      if (this.editing) {
        this.axios
          .patch(`http://localhost:5000/posts/${this.$route.params.id}`, this.form)
          .then(data => {
            toast.success('Post has been updated!')
          })
      } else {
        this.axios
          .post(`http://localhost:5000/posts/`, this.form)
          .then(data => {
            toast.success('Post has been created!')
          })
      }
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.title = ''
      this.form.content = ''
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
