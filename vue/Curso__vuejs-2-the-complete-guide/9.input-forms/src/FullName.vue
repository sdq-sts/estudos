<template>
  <div>
    <!-- First Name-->
    <div class="form-group">
      <label for="fist-name">First Name</label>
      <input :value="firstName" type="text" class="form-control" id="first-name" placeholder="First name" @input="nameChanged(true, $event)">
    </div>

    <!--Last Name-->
    <div class="form-group">
      <label for="last-name">Last Name</label>
      <input :value="lastName" type="text" class="form-control" id="last-name" placeholder="Last name" @input="nameChanged(false, $event)">
    </div>
  </div>
</template>

<script>
  export default {
    props: ['value'],

    methods: {
      nameChanged(isFirst, e) {
        let name
        if(isFirst) {
          name = e.target.value + ' ' + this.lastName
        } else {
          name = this.firstName + ' ' + e.target.value
        }

        this.value = name
        this.$emit('input', this.value)

      }
    },

    computed: {
      firstName() {
        return this.value.split(' ')[0]
      },
      lastName() {
        return this.value.split(' ')[1]
      }
    }
  }
</script>

<style scoped></style>
