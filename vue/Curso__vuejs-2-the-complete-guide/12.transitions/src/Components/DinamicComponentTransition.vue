<template>
  <div class="row">
    <input @click="toggleComponent" type="button" value="Toggle components" class="btn btn-primary">
    <transition name="slide">
      <component :is="selectedComponent"></component>
    </transition>
  </div>
</template>

<script>
import DinamicComponentDanger from './DinamicComponentTransitionDanger.vue'
import DinamicComponentSuccess from './DinamicComponentTransitionSuccess.vue'

export default {
  data() {
    return {
      selectedComponent: 'dinamic-component-success'
    }
  },

  components: {
    DinamicComponentDanger,
    DinamicComponentSuccess
  },

  methods: {
    toggleComponent() {
      if (this.selectedComponent == 'dinamic-component-success') {
        this.selectedComponent = 'dinamic-component-danger'
      } else {
        this.selectedComponent = 'dinamic-component-success'
      }
    }
  }
}
</script>

<style scoped>
.slide-enter-active, .fade-slide-leave-active {
  transition: all .5s ease;
}

/* Classes com estilo de origem */
.slide-enter, .fade-slide-leave-to {
  transform: translateY(30px);
  opacity: 0;
}
</style>
