import axios from "axios";

const state = {
  cars: [],
  car: {
    _id: '',
    make: '',
    vehicleNumber: '',
    gasStation: '',
    fuel: 1
  }
}

const mutations = {
  SET_CARS: (state, cars) => {
    state.cars = cars;
  },
  ADD_NEW_CAR_TO_ARRAY: (state, car) => {
    state.cars.push(car)
  },
  SET_CAR_PROPERTIES: (state, car) => {
    state.car = car;
  },
  UPDATE_CAR_IN_ARRAY: (state, car) => {
    const index = state.cars.findIndex(item => item._id === car._id)
    state.cars[index].make = car.make
    state.cars[index].vehicleNumber = car.vehicleNumber
    state.cars[index].gasStation = car.gasStation
    state.cars[index].fuel = car.fuel
  },
  DELETE_CAR_FROM_ARRAY: (state, car) => {
    let index = state.cars.indexOf(car)
    state.cars.splice(index, 1);
  }

}
const actions = {
  async GET_ALL_CARS_FROM_API({commit}) {
    let result = await axios.get(`${process.env.VUE_APP_BACKEND_API_CARS_URL}cars`);
    commit("SET_CARS", result.data)
  },
  async CREATE_NEW_CAR({commit}, car) {
    await axios.post(`${process.env.VUE_APP_BACKEND_API_CARS_URL}cars`, {
      make: car.make,
      vehicleNumber: car.vehicleNumber,
      gasStation: car.gasStation,
      fuel: car.fuel
    })
    commit("ADD_NEW_CAR_TO_ARRAY", car)
  },
  EDIT_CAR({commit}, car) {
    commit('SET_CAR_PROPERTIES', car)
  },

  async UPDATE_CAR({commit}, car) {
    await axios.put(`${process.env.VUE_APP_BACKEND_API_CARS_URL}cars/${car._id}`, {
      _id: car._id,
      make: car.make,
      vehicleNumber: car.vehicleNumber,
      gasStation: car.gasStation,
      fuel: car.fuel,
    })
    commit('UPDATE_CAR_IN_ARRAY', car)
  },
  async DELETE_CAR({commit}, car) {
    await axios.delete(`${process.env.VUE_APP_BACKEND_API_CARS_URL}cars/${car._id}`)
    commit('DELETE_CAR_FROM_ARRAY', car)
  }
}

const getters = {
  GET_ALL_CARS: (state) => {
    return state.cars;
  },
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
