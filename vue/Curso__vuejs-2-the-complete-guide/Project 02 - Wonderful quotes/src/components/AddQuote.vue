<template>
<div>
  <div class="col-md-12">
    <div class="form-group">
      <label for="exampleTextarea">Quote</label>
      <textarea v-model="quote" class="form-control" rows="3"></textarea>

      <div class="text-center"> 
        <input @click="addQuote" class="btn btn-primary" type="submit" value="Add Quote"/>
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
        quote: '',
        quotesList: []
      }
    },

    methods: {
      addQuote() {
        if(this.quotesList.length > 9) {
          alert('Too many Quotes! Delete some before adding new ones!')
        } else {
          if(this.quote.length) {
            this.quotesList.push(this.quote)
            this.quote = ''
            this.passQuotesList()
          }
        }
      },

      passQuotesList() {
        eventBus.$emit('quotesList', this.quotesList)
      }
    }
  }
</script>

<style scoped>
  .btn {
    margin: 2em auto;
  }
</style>
