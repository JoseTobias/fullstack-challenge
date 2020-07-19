<template>
  <div class="container-data">
    <data-table :itens="itens" />
  </div>
</template>

<script>
import DataTable from '@/components/DataTable'
export default {
  name: 'data-container',
  props: {
    itens: {
      type: Array,
      required: true
    }
  },
  components: {
    DataTable
  },
  data() {
    return {
    }
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style scoped lang="scss">
.container-data {
  display: flex;
  justify-content: space-between;
}
</style>
