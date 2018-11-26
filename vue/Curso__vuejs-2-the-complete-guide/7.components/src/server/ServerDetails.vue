<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="id">ID: {{ id }}</p>
    <p v-if="status">Status: {{ status }}</p>
    <button v-if="status && status !== 'normal'" @click="changeStatusToNormal">Change Status to normal</button>
  </div>
</template>

<script>
  import { eventBus } from '../main'

  export default {
    data() {
      return {
        id: '',
        status: ''
      }
    },

    methods: {
      changeStatusToNormal() {
        this.status = 'normal'
        eventBus.$emit('changeStatusToNormal', { id: this.id, status: this.status })
      }
    },

    created() {
      eventBus.$on('showDetails', (data) => {
        this.id = data.id
        this.status = data.status
      })
    }
  }
</script>
