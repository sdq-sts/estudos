<template>
  <div class="row">
    <div class="col-md-12">
      <input type="button" class="btn btn-primary" value="Multiple Elements" @click="show = !show">
    </div>

    <!--In this mode, you need to provide a unique key for each element
    and only one element is rendered-->
    <transition name="fade-slide" mode="out-in">
      <div class="col-md-12" v-if="show" key="1">
        <div class="alert alert-info" >{{ infoMsg1 }}</div>
      </div>
      <div class="col-md-12" v-if="!show" key="2">
        <div class="alert alert-warning">{{ infoMsg2 }}</div>
      </div>
    </transition>

  </div>
</template>

<script>
export default {
  data () {
    return {
      infoMsg1: 'Show this',
      infoMsg2: 'Then this',
      show: true
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
