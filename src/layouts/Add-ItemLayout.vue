<template>
  <q-layout view="hHh lpR fFf">

    <q-header reveal elevated class="bg-primary text-white q-pa-md" height-hint="98">
      <q-toolbar>
        <router-link to="/">
          <q-toolbar-title>
            <q-avatar>
              <img src="../assets/images/icons/gas station.png">
            </q-avatar>
            Gas Stations
          </q-toolbar-title>
        </router-link>
        <q-space/>
        <q-btn color="positive" class="glossy q-mr-lg" rounded @click="addCar">
          <q-icon left size="2em" name="drive_eta"/>
          <div>Add Car</div>
        </q-btn>
        <q-btn color="positive" class="glossy" rounded @click="addGasStation">
          <q-icon left size="2em" name="local_gas_station"/>
          <div>Add Gas Station</div>
        </q-btn>
      </q-toolbar>

    </q-header>

    <q-page-container>
        <router-view/>
    </q-page-container>

  </q-layout>
</template>

<script>

  export default {
    name: 'AddItemLayout',
    components: {},
    data() {
      return {}
    },
    methods: {
      addCar() {
        this.$router.push('/cars/add')
      },
      addGasStation() {
        this.$router.push('/gas-stations/add')
      }
    }
  }
</script>
