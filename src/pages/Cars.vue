<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md">
      <q-table
        class="my-sticky-header-table"
        title="Cars"
        :data="arrayCars"
        :columns="columns"
        :pagination.sync="pagination"
        row-key="name"
        flat
        bordered>
        <template v-slot:body-cell-actions="props">
          <q-td :props="props">
            <q-btn dense round flat color="orange" @click="editRow(props)" icon="edit"></q-btn>
            <q-btn dense round flat color="red" @click="deleteRow(props)"
                   icon="delete"></q-btn>
          </q-td>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
  import { mapState, mapActions} from 'vuex'
  export default {
    name: "PageCars",
    data: () => ({
      pagination: {
        rowsPerPage: 10 // current rows per page being displayed
      },
      columns: [
        {
          name: 'make',
          required: true,
          label: 'Make',
          align: 'left',
          field: row => row.make,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'vehicleNumber',
          align: 'left',
          label: 'Vehicle Number',
          field: 'vehicleNumber',
          sortable: true
        },
        {
          name: 'actions',
          align: 'left',
          label: 'Actions',
          field: '',
        }
      ],

    }),
    computed: {
      ...mapState('cars', ['cars']),
      arrayCars() {
        return Object.values(this.cars)
      }
    },
    methods: {
      editRow(props) {
        this.EDIT_CAR(props.row);
        this.$router.push(`/cars/edit/${props.row._id}`)
      },
      deleteRow(props) {
        this.DELETE_CAR(props.row)
      },
      ...mapActions('cars', ['EDIT_CAR', 'DELETE_CAR']),

    }
  }
</script>

<style lang="sass">
  .my-sticky-header-table
    height: 700px

    .q-table__top,
    .q-table__bottom,
    thead tr:first-child th
      background-color: $secondary

    thead tr th
      position: sticky !important
      z-index: 1

    thead tr:first-child th
      top: 0



    &.q-table--loading thead tr:last-child th
      top: 48px

    .q-table tbody td
      font-size: 1.3rem

    .q-table th
      font-size: 1.5rem
      color: $primary

    .q-table__title
      font-size: 1.5rem

</style>
