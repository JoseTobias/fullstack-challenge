<template>
  <div class="container-data">
    <data-table :itens="itens" />
    <chart :itens="itens" :colors="colors" :key="itens.length"/>
  </div>
</template>

<script>
import DataTable from '@/components/DataTable'
import Chart from '@/components/Chart'
export default {
  name: 'data-container',
  props: {
    itens: {
      type: Array,
      required: true
    }
  },
  components: {
    DataTable,
    Chart
  },
  data() {
    return {
    }
  },
  methods: {
    randomColor() {
      return '#' + Math.random().toString(16).substr(-6)
    }
  },
  computed: {
    colors: function() {
      const colors = this.itens.map(() => {
        return this.randomColor()
      })
      return colors
    }
  }
}
</script>

<style scoped lang="scss">
.container-data {
  display: flex;
  justify-content: space-between;
}
</style>
