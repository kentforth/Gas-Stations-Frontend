<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md">
      <q-table
        class="my-sticky-header-table"
        title="General Info"
        :data="arrayCars"
        :columns="columns"
        :pagination.sync="pagination"
        row-key="name"
        flat
        bordered
      />
    </div>
  </q-page>
</template>

<script>
  import { mapState} from 'vuex'
  export default {
    name: 'PageIndex',
    data: () => ({
      pagination: {
        rowsPerPage: 10 // current rows per page being displayed
      },
      columns: [
        {
          name: 'make',
          required: true,
          label: 'Car',
          align: 'left',
          field: row => row.make,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'gasStation',
          align: 'left',
          label: 'Gas Station',
          field: 'gasStation',
          sortable: true
        },
        {
          name: 'fuel',
          align: 'left',
          label: 'Fuel',
          field: 'fuel',
          sortable: true
        },
      ],

    }),
    computed: {
      ...mapState('cars', ['cars']),
      arrayCars() {
        return Object.values(this.cars)
      }
    },
    mounted() {

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

  .q-page-container
    overflow: hidden
</style>
