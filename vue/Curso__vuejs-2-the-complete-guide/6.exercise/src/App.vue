<template>
    <div class="container">

        <div class="row">
            <app-header></app-header>
        </div>

        <hr>

        <div class="row">
            <app-server-list></app-server-list>
            <app-server-details></app-server-details>
        </div>

        <hr>

        <div class="row">
            <app-footer></app-footer>
        </div>

    </div>
</template>

<script>
import AppHeader from './AppHeader.vue'
import AppServerList from './AppServerList.vue'
import AppServerDetails from './AppServerDetails.vue'
import AppFooter from './AppFooter.vue'

export default {
  components: {
    'app-header': AppHeader,
    'app-server-list': AppServerList,
    'app-server-details': AppServerDetails,
    'app-footer': AppFooter
  }
}

</script>

<style>

</style>
