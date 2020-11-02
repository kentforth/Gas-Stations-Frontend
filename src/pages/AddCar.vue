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
  import {mapActions} from 'vuex'

  export default {
    name: "AddCar",
    data: () => ({
      make: '',
      vehicleNumber: '',
      gasStation: '',
      fuel: '',


    }),
    methods: {
      ...mapActions('cars', ['CREATE_NEW_CAR', 'GET_ALL_CARS_FROM_API']),
      back() {
        this.$router.push('/cars')
      },
      onSubmit() {
        if (this.accept !== true) {

          const car = {
            make: this.make,
            vehicleNumber: this.vehicleNumber,
            gasStation: this.gasStation,
            fuel: this.fuel,
          }
          this.CREATE_NEW_CAR(car);
          this.GET_ALL_CARS_FROM_API()
          this.$q.notify({
                           color: 'green-4',
                           textColor: 'white',
                           icon: 'done',
                           message: 'Car has been added'
                         })
          this.$router.push('/cars')
        }
      },
    }
  }
</script>

<style scoped>

</style>
