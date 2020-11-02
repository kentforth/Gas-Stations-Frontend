import Vue from 'vue'
import Vuex from 'vuex'
import cars from "src/store/cars";
import gas_stations from "src/store/gas-stations";

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
     cars,
     gas_stations
    },


    strict: process.env.DEBUGGING
  })

  return Store
}
