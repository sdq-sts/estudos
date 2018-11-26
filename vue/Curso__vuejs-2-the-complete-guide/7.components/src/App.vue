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
import AppHeader from './shared/Header.vue'
import AppFooter from './shared/Footer.vue'
import AppServerList from './server/ServerList.vue'
import AppServerDetails from './server/ServerDetails.vue'

export default {
  components: {
    AppHeader,
    AppServerList,
    AppServerDetails,
    AppFooter
  }
}

</script>

<style>

</style>
