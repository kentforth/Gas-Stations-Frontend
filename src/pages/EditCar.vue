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
          v-model="make"
          label="Vehicle make *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

        <q-input
          outlined
          v-model="vehicleNumber"
          label="Vehicle Number *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

        <q-input
          outlined
          v-model="gasStation"
          label="Gas Station*"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

        <q-input
          outlined
          type="number"
          v-model="fuel"
          label="Fuel quantity(in litres) *"
          lazy-rules
          step="any"
          :rules="[
          val => val !== null && val !== '' || 'Please type fuel quantity in litres',
          val => val > 0 || 'Please type fuel more than 0 litre'
        ]"
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
    name: "EditCar",
    data: () => ({
      make: '',
      vehicleNumber: '',
      gasStation: '',
      fuel: '',
      Id: ''
    }),
    mounted() {
      const car = this.car
      this._id = car._id
      this.vehicleNumber = car.vehicleNumber
      this.make = car.make
      this.gasStation = car.gasStation
      this.fuel = car.fuel
    },
    computed: {
      ...mapState('cars', ['car']),
    },
    methods: {
      ...mapActions('cars', ['UPDATE_CAR']),

      back() {
        this.$router.push('/cars')
      },
      onSubmit() {
        if (this.accept !== true) {
          const car = {
            _id: this._id,
            make: this.make,
            vehicleNumber: this.vehicleNumber,
            gasStation: this.gasStation,
            fuel: this.fuel,
          }
          this.UPDATE_CAR(car)
          this.$q.notify({
                           color: 'green-4',
                           textColor: 'white',
                           icon: 'done',
                           message: 'Car has been updated'
                         })
          this.$router.push('/cars')
        }
      },
    }
  }
</script>

<style scoped>

</style>
