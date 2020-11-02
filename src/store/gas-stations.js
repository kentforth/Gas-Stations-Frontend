import axios from "axios";

const state = {
  gasStations: [],
  station: {
    _id: '',
    name: '',
    address: '',
  }
}

const mutations = {
  SET_GAS_STATIONS: (state, cars) => {
    state.gasStations = cars;
  },
  ADD_NEW_GAS_STATION_TO_ARRAY:(state,station) => {
    state.gasStations.push(station)
  },
  SET_GAS_STATION_PROPERTIES: (state, station) => {
    state.station = station;
  },
  UPDATE_GAS_STATION_IN_ARRAY: (state, station) => {
    const index = state.gasStations.findIndex(item => item._id === station._id)
    state.gasStations[index].name = station.name
    state.gasStations[index].address = station.address
  },
  DELETE_GAS_STATION_FROM_ARRAY: (state, station) => {
    let index = state.gasStations.indexOf(station)
    state.gasStations.splice(index, 1);
  }

}
const actions = {
  async GET_ALL_GAS_STATIONS_FROM_API({commit}) {
    let result = await axios.get(`${process.env.VUE_APP_BACKEND_API_CARS_URL}gas-stations`);
    commit("SET_GAS_STATIONS", result.data)
  },
  async CREATE_NEW_GAS_STATION({commit} ,station) {
    await axios.post(`${process.env.VUE_APP_BACKEND_API_CARS_URL}gas-stations`, {
      name: station.name,
      address: station.address,
    })
    commit("ADD_NEW_GAS_STATION_TO_ARRAY", station)
  },
  EDIT_GAS_STATION({commit}, station) {
    commit('SET_GAS_STATION_PROPERTIES', station)
  },
  async UPDATE_GAS_STATION({commit}, station) {
    await axios.put(`${process.env.VUE_APP_BACKEND_API_CARS_URL}gas-stations/${station._id}`, {
      _id: station._id,
      name: station.name,
      address: station.address
    })
    commit('UPDATE_GAS_STATION_IN_ARRAY', station)
  },
  async DELETE_GAS_STATION({commit}, station) {
    await axios .delete(`${process.env.VUE_APP_BACKEND_API_CARS_URL}gas-stations/${station._id}`)
    commit('DELETE_GAS_STATION_FROM_ARRAY', station)
  }
}

const getters = {
  GET_ALL_GAS_STATIONS: (state) => {
    return state.gasStations;
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
