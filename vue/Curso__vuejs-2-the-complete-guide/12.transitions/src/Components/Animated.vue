<template>
  <div class="row">
    <input type="button" class="btn btn-primary" value="Animated" @click="show = !show">

    <transition name="animated">
      <div class="alert alert-info" v-if="show">{{ infoMsg }}</div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      infoMsg: 'Say hello to my little animated info',
      show: false
    }
  }
}
</script>

<style scoped>
/* Ativado no primeiro frame do elemento */
.animated-enter {

}

/* Ativado no último frame do elemento */
.animated-leave-to {

}

/* Ativado do primeiro frame em diante depois que o elemento está na tela */
.animated-enter-active {
  animation: slide-down .5s ease-in-out forwards;
}

/* Ativado quando o elemento está saindo da tela */
.animated-leave-active {
  animation: slide-up .5s ease-in-out forwards;
}

@keyframes slide-down {
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-up {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-20px);
    opacity: 0;
  }
}

</style>
