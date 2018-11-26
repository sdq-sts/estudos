var app = new Vue({
  el: '#exercise',
  data: {
    value: ''
  },
  
  methods: {
    showAlert: function() {
      alert('This button was clicked')
    },
    storeValue: function(e) {
      this.value = e.target.value
    }
  }
})
