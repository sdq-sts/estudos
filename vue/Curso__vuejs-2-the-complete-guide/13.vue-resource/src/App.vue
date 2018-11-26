<template>
  <div id="app" class="container">
    <h1>HTTP</h1>
    <app-send-data></app-send-data>
    <hr>
    <app-get-data></app-get-data>
  </div>
</template>

<script>
import AppGetData from './components/GetData.vue'
import AppSendData from './components/SendData.vue'

export default {
  name: 'app',
  data () {
    return {}
  },

  components: {
    AppGetData,
    AppSendData
  }
}
</script>

<style>
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
