<template>
  <div class="container-data">
    <data-table :itens="itens" />
    <div class="chart">
      <chart :itens="itens" :colors="colors" :key="itens.length"/>
      <labels :itens="itens" :colors="colors"/>
    </div>
  </div>
</template>

<script>
import DataTable from '@/components/DataTable'
import Chart from '@/components/Chart'
import Labels from '@/components/Labels'

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
    Chart,
    Labels
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
    },
  }
}
</script>

<style scoped lang="scss">
.container-data {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  @media (max-width: 991px) {
    flex-direction: column;
  }
  .chart {
    display: flex;
    @media (max-width: 991px) {
      margin-top: 30px;
    }
    @media (max-width: 575px) {
      margin-top: 30px;
      flex-direction: column;
    }
  }
}
</style>
