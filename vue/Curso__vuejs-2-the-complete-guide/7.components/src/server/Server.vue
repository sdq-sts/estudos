<template>
  <li @click="showDetails">
    <p>Server: {{ id }} - Status: {{ status }}</p>
  </li>
</template>

<script>
  import { eventBus } from '../main'

  export default {
    props: {
      id: { type: Number, required: true },
      status: { type: String, required: true },
      active: Boolean
    },

    methods: {
      showDetails() {
        eventBus.$emit('showDetails', { 
          id: this.id,
          status: this.status
        })
      }
    }
  }
</script>
