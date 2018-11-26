var app = new Vue({
  el: '#exercise',
  data: {
    name: 'Sadraque',
    age: 29,
    imgUrl: 'https://vuejs.org/images/logo.png'
  },
  
  methods: {
  	randomNumber: function() {
    	return Math.random()
    }
  }
})
