<template>
  <div class="container p-3 my-3 border">
    <div class="card-header bg-info text-white d-flex">
      <span href="#" class="text-white">Posts Library</span>
      <router-link :class="'text-white ml-auto'" to="posts/add">Add Post</router-link>
    </div>
    <b-table
      bordered
      stripped
      :busy="isBusy"
      show-empty
      sticky-header
      :fields="fields"
      empty-text="Your cart is empty"
      striped
      hover
      :items="posts"
    >
      <template v-slot:cell(edit)="data">
        <router-link :to="`posts/edit/${data.item._id}`">Edit </router-link>
      </template>
      <template v-slot:cell(delete)="data">
        <a :style="'cursor: pointer'" @click="deletePost(data.item._id)" :class="'text-danger'" :to="`posts/edit/${data.item._id}`">Delete </a>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: 'Posts',
  data () {
    return {
      isBusy: false,
      posts: [],
      fields: ['title', 'content', 'edit', 'delete']
    }
  },
  mounted () {
    this.getPosts()
  },
  computed: {
    user: function () {
      return this.$store.getters.user
    }
  },
  methods: {
    getPosts () {
      this.isBusy = true
      this.axios
        .get(`http://localhost:5000/users/${this.user._id}/posts`)
        .then(data => {
          this.isBusy = false
          console.log(data)
          this.posts = data.data
        })
    },
    deletePost (id) {
      this.$bvModal.msgBoxConfirm('Are you sure?')
        .then(value => {
          if (value) {
            this.axios
              .delete(`http://localhost:5000/posts/${id}`)
              .then(data => this.getPosts())
          }
        })
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
