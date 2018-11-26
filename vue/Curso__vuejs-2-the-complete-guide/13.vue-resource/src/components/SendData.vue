<template>
  <div class="row">
    <h3>Send Data <small>(post)</small></h3>
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" class="form-control" v-model="user.username">
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" v-model="user.email">
      </div>

      <button @click="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: { username: '', email: '' },
        resource: {}
      }
    },

    methods: {
      submit() {
        this.resource.user.save({}, this.user)

        this.user.username = ''
        this.user.email = ''
      } 
    },
    created() {
      this.resource.data = this.$resource('data.json')
      this.resource.user = this.$resource('user.json')
    }
  }
</script>
