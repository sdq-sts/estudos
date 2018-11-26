<template>
  <div>
    <div @click="deleteQuote" class="quote">
      <p>{{ quote }}</p>
    </div>
  </div>
</template>

<script>
  import { eventBus } from '../main.js'

  export default {
    props: {
      quote: {
        type: String,
        required: true
      },

      index: {
        type: Number,
        required: true
      }
    },

    methods: {
      deleteQuote() {
        eventBus.$emit('deleteQuote', this.index)
      }
    },

    data() {
      return {
        quotesList: null
      }
    },

    created() {
      eventBus.$on('quotesList', (quotesList) => {
        this.quotesList = quotesList
      })
    }
  }
</script>

<style scoped>
  .quote {
    padding: 1em;
    border: 1px solid #333;
    text-align: center;
    margin-bottom: 1em;
    cursor: pointer;
  }

  p {
    margin: 0;
  }
</style>
