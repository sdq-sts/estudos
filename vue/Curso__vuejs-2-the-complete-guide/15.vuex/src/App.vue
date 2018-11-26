<template>
  <div id="app">
   <div class="row">
     <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
       <h1>Vuex</h1>
       <app-result ></app-result>
       <hr>
       <app-counter ></app-counter>
     </div>
   </div>
  </div>
</template>

<script>
  import Counter from './components/Counter.vue'
  import Result from './components/Result.vue'

export default {
  name: 'app',
  components: {
    appCounter: Counter,
    appResult: Result
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
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
