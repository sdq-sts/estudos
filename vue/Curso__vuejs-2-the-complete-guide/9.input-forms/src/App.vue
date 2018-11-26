<template>
  <div class="container">
    <form v-if="!submited">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">

          <full-name v-model="fullName"></full-name>

          <!--Email-->
          <div class="form-group">
            <label for="email">Email address</label>
            <input v-model="email" type="email" class="form-control" id="email" placeholder="Email">
          </div>

          <!--Password-->
          <div class="form-group">
            <label for="password">Password</label>
            <input v-model="password" type="password" class="form-control" id="password" placeholder="Password">
          </div>

          <!--Store Data-->
          <fieldset class="form-group">
            <legend>Store Data?</legend>
            <div class="form-check">
              <label class="form-check-label">
                <input v-model="storeData" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="true" checked>Yes
               </label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input v-model="storeData" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="false">No
              </label>
            </div>
          </fieldset>

          <button @click.prevent="submitForm" type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>
    <div v-if="submited" class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{ fullName }}</p>
            <p>Mail: {{ email }}</p>
            <p>Password: {{ password }}</p>
            <p>Store in Database?: {{ storeData == 'true' ? 'Yes': 'No'}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import fullName from './FullName.vue'

  export default {
    data() {
      return {
        fullName: 'Sadraque Santos',
        password: null,
        email: null,
        storeData: false,
        submited: false
      }
    },

    methods: {
      submitForm() {
        this.submited = true
      }
    },

    components: {
      fullName
    }
  }
</script>

<style>
  .container {
      margin-top: 5em;
  }
</style>
