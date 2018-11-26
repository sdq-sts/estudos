<template>
  <div class="row">
    <h3>Get Data <small>(get)</small></h3>
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <button @click="getData" class="btn btn-primary">Get some Data</button>
      <br><br>
      <ul class="list-group">
        <li v-for="user in users" class="list-group-item" >
          <div>Name: {{ user.username }}</div>
          <div>Email: {{ user.email }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return { users: [] }
    },

    methods: {
      getData() {
        this.$http.get('data.json')
          .then(res => res.json())
          .then(data => {
            // ES7 Object to Array
            this.users = Object.values(data)
          })
          .catch(err => console.log(err))
      }
    }
  }
</script>

<style>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

