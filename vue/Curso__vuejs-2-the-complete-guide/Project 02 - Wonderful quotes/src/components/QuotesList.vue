<template>
  <div>
    <div class="clearfix quotes-list">
      <app-quote v-for="(quote, index) in quotesList" :quote="quote" :index="index"class="col-md-4"></app-quote>
    </div>
    <div class="col-md-12">
      <div class="alert alert-info text-center" role="alert">
        <strong>Info:</strong> Click on a Quote to delete it.
      </div>
    </div>
  </div>
</template>


<script>
  import { eventBus } from '../main.js'
  import AppQuote from './Quote.vue'

  export default {
    components: {
      AppQuote
    },

    data() {
      return {
        quotesList: []
      }
    },

    created() {
      eventBus.$on('quotesList', (quotesList) => {
        this.quotesList = quotesList
      })

      eventBus.$on('deleteQuote', (index) => {
        this.quotesList.splice(index, 1)
        eventBus.$emit('quotesList', this.quotesList)
      })
    }
  }
</script>

<style scoped>
  .quotes-list {
    margin-bottom: 2em;
  }
</style>
