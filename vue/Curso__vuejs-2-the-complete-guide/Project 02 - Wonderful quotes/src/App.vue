<template>
  <div class="container">
    <progress-bar class="row"></progress-bar>
    <add-quote class="row"></add-quote>
    <quotes-list class="row"></quotes-list>
  </div>
</template>

<script>
  import progressBar from './components/ProgressBar.vue'
  import addQuote from './components/AddQuote.vue'
  import quotesList from './components/QuotesList.vue'

  export default {
    components: {
      progressBar,
      addQuote,
      quotesList
    }
  }
</script>

<style>
</style>
