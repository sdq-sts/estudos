<template>
  <div class="row">
    <input type="button" class="btn btn-primary" value="Event Hook" @click="load = !load">

    <transition name="fade-slide" 
      @before-enter="transitionBeforeEnter"
      @enter="transitionEnter"
      @after-enter="transitionAfterEnter"
      @enter-cancelled="transitionCancelledEnter"
      
      @before-leave="transitionBeforeLeave"
      @leave="transitionLeave"
      @after-leave="transitionAfterLeave"
      @leave-cancelled="transitionCancelledLeave">
      <div class="alert alert-info" v-if="load">{{ infoMsg }}</div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      infoMsg: 'Say hello to my event hook based transition',
      load: false
    }
  },

  methods: {
    transitionBeforeEnter(el) {
      console.log('Transition Before Enter!')
    },
    transitionEnter(el, done) {
      console.log('Transition Enter!')
      done()
    },
    transitionAfterEnter(el) {
      console.log('Transition After Enter!')
    },
    transitionCancelledEnter(el) {
      console.log('Transition Cancelled Enter!')
    },


    transitionBeforeLeave(el) {
      console.log('Transition Before Leave!')
    },
    transitionLeave(el, done) {
      console.log('Transition Leave!')
      done()
    },
    transitionAfterLeave(el) {
      console.log('Transition After Leave!')
    },
    transitionCancelledLeave(el) {
      console.log('Transition Cancelled Leave!')
    }
  }
}
</script>

<style scoped>

</style>
