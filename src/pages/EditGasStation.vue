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
          label="Vehicle make *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

        <q-input
          outlined
          v-model="address"
          label="Vehicle Number *"
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
  import {mapActions, mapState} from 'vuex'

  export default {
    name: "EditGasSation",
    data: () => ({
      name: '',
      address: '',
      Id: ''
    }),
    mounted() {
      const station = this.station
      this._id = station._id
      this.name = station.name
      this.address = station.address

    },
    computed: {
      ...mapState('gas_stations', ['station']),
    },
    methods: {
      ...mapActions('gas_stations', ['UPDATE_GAS_STATION']),

      back() {
        this.$router.push('/gas-stations')
      },
      onSubmit() {
        if (this.accept !== true) {
          const station = {
            _id: this._id,
            name: this.name,
            address: this.address,
          }
          this.UPDATE_GAS_STATION(station)
          this.$q.notify({
                           color: 'green-4',
                           textColor: 'white',
                           icon: 'done',
                           message: 'Gas Station has been updated'
                         })
          this.$router.push('/gas-stations')
        }
      },
    }
  }
</script>

<style scoped>

</style>
