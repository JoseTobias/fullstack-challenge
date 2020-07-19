<template>
  <div class="chart">
    <pie-chart :data="chartData" :options="chartOptions" :colors="colors" :itens="itens" style="position: relative; height: 250px; width:250px"></pie-chart>
  </div>
</template>

<script>
import PieChart from "@/scripts/PieChart.js";
export default {
  name: 'chart',
  components: {
    PieChart
  },
  props: {
    itens: {
      type: Array,
      required: true
    },
    colors: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      chartOptions: {
        hoverBorderWidth: 20
      },
      chartData: {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        datasets: [
          {
            label: "Data One",
            borderWidth: 4
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang="scss">
.chart {
}
</style>
