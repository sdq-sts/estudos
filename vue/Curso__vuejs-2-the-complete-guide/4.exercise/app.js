var app = new Vue({
  el: '#exercise',
  data: {
    effect: false,
    userClass: '',
    userClass2: '',
    fullWidth: '',
    styles: '',
    progress: 0
  },
  
  computed: {
    isFullWidth: function() {
      return this.fullWidth == 'true'
    }
  },

  methods: {
    startEffect: function() {
    	var vm = this
    	setInterval(function() {
      	vm.effect = !vm.effect
      }, 3000)
    },
    
    startProgress: function() {
      var vm = this
      
      setInterval(function() {
        if(vm.progress <= 100) {
          vm.progress++
        }
      }, 1000 / 60)
    }
  }
})
