<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
  import { mapActions} from 'vuex'
export default {
  name: 'App',
  mounted() {
    this.GET_ALL_CARS_FROM_API();
    this.GET_ALL_GAS_STATIONS_FROM_API();
  },
  methods:{
    ...mapActions('cars', ['GET_ALL_CARS_FROM_API']),
    ...mapActions('gas_stations', ['GET_ALL_GAS_STATIONS_FROM_API']),
  }
}
</script>
