<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <app-server 
        class="list-group-item" 
        v-for="server in servers"
        :id="server.id"
        :status="server.status"
        :active="server.active">
      </app-server>
      </li>
    </ul>
  </div>
</template>

<script>
import { eventBus } from '../main'
import AppServer from './Server.vue'

export default {
  components: {
    AppServer
  },

  data: function() {
    return {
      servers: [
        { id: 1, status: 'normal', active: false},
        { id: 2, status: 'critical', active: false },
        { id: 3, status: 'unknown', active: false },
        { id: 4, status: 'normal', active: false }
      ]
    }
  },

  created() {
    eventBus.$on('changeStatusToNormal', (data) => {

      this.servers.map(el => {
        if(el.id === data.id) {
          el.status = data.status
        }
      })

    })
  }
}

</script>
