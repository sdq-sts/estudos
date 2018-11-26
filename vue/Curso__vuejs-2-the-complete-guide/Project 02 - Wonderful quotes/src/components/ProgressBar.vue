<template>
<div>
  <div class="col-md-12">
    <h1>Quotes Added</h1>
    <div class="progress">
      <div class="progress-bar" role="progressbar" :style="{width: quotes * 10 + '%'}" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
        {{ quotes ? quotes + '/10' : '' }}
      </div>
    </div>
  </div>
</div>
</template>


<script>
  import { eventBus } from '../main.js'

  export default {
    data() {
      return {
        quotes: 0
      }
    },

    created() {
      eventBus.$on('quotesList', (quotesList) => {
        this.quotes = quotesList.length
      })
    }
  }
</script>
