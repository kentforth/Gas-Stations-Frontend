<template>
  <q-page class="flex flex-center column">
    <q-btn label="Back" color="primary" class="col-4 col-md-6" @click="back"/>
    <div class="q-pa-md" style="width: 600px">

      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
      >
        <q-input
          outlined
          v-model="name"
          label="Name *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

        <q-input
          outlined
          v-model="address"
          label="Address *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

        <div class="column">
          <q-btn label="Submit" type="submit" class="col-4 col-md-6" color="positive"/>
        </div>
      </q-form>

    </div>
  </q-page>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: "AddGasStation",
    data: () => ({
      name: '',
      address: '',


    }),
    methods: {
      ...mapActions('gas_stations', ['CREATE_NEW_GAS_STATION', 'GET_ALL_GAS_STATIONS_FROM_API']),
      back() {
        this.$router.push('/gas-stations')
      },
      onSubmit() {
        if (this.accept !== true) {

          const station = {
            name: this.name,
            address: this.address,

          }
          this.CREATE_NEW_GAS_STATION(station);
          this.GET_ALL_GAS_STATIONS_FROM_API();
          this.$q.notify({
                           color: 'green-4',
                           textColor: 'white',
                           icon: 'done',
                           message: 'Gas Station has been added'
                         })
          this.$router.push('/gas-stations')
        }
      },
    }
  }
</script>

<style scoped>

</style>
