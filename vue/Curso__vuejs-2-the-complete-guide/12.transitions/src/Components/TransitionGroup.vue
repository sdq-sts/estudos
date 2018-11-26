<template>
  <div class="col-md-8 col-md-offset-2">
    <input type="text" v-model="itemToAdd">
    <input @click="addToList" type="button" class="btn btn-primary" value="Add to list">
    <ul class="list-group">
      <transition-group name="fade-slide">
      <li 
        v-for="(item, index) in listItems"
        class="list-group-item"
        :key="item">{{ item }}
        <input @click="removeItem(index)" type="button" class="btn btn-primary" value="Remove Item">
      </li>
      </transition-group>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        itemToAdd: '',
        listItems: [1, 2, 3]
      }
    },

    methods: {
      addToList() {
        let pos = Math.floor(Math.random() * this.listItems.length)
        this.listItems.splice(pos, 0,this.itemToAdd)
        this.itemToAdd = ''
      },

      removeItem(i) {
        this.listItems.splice(i, 1)
      }
    }
  }
</script>

<style>
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all .5s ease;
}

/* Classes com estilo de origem */
.fade-slide-enter, .fade-slide-leave-to {
  transform: translateX(-80px);
  opacity: 0;
}

.fade-slide-leave-active {
  position:absolute;
}

.fade-slide-move {
  transition: transform .5s;
}
</style>
