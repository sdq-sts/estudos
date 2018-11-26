<template>
  <div class="row">
    <input type="button" class="btn btn-primary" value="Fade and slide" @click="show = !show">

    <transition name="fade-slide">
      <div class="alert alert-info" v-if="show">{{ infoMsg }}</div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      infoMsg: 'Say hello to my little info',
      show: false
    }
  }
}
</script>

<style scoped>
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all .5s ease;
}

/* Classes com estilo de origem */
.fade-slide-enter, .fade-slide-leave-to {
  transform: translateX(-80px);
  opacity: 0;
}
</style>
