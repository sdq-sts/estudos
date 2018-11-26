<template>
  <div id="app" class="container">

    <h1>Transitions</h1>
    <hr>
    <appear></appear>
    <hr>
    <fade-slide></fade-slide>
    <hr>
    <animated></animated>
    <hr>
    <multiple-elements-transition></multiple-elements-transition>
    <hr>
    <event-hook></event-hook>
    <hr>
    <dinamic-components></dinamic-components>
    <hr>
    <list-group-transition></list-group-transition>

  </div>
</template>

<script>
import Appear from './Components/Appear.vue'
import Animated from './Components/Animated.vue'
import FadeSlide from './Components/Fade-slide.vue'
import EventHook from './Components/EventHooks.vue'
import MultipleElementsTransition from './Components/MultipleElementsTransition.vue'
import DinamicComponents from './Components/DinamicComponentTransition.vue'
import ListGroupTransition from './Components/TransitionGroup.vue'

export default {
  name: 'app',

  components: {
    FadeSlide,
    Animated,
    Appear,
    MultipleElementsTransition,
    EventHook,
    DinamicComponents,
    ListGroupTransition
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

a {
  color: #42b983;
}

.btn {
  margin: 2em;
}
</style>
