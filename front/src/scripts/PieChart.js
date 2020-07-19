import { Doughnut } from "vue-chartjs";
export default {
  extends: Doughnut,
  props: ["data", "options", "itens", "colors"],
  methods: {
    teste() {
      let data = this.data
      if(this.itens.length) {
        data = this.formatData()
      }
      this.renderChart(data, {
        borderWidth: "10px",
        hoverBackgroundColor: "red",
        hoverBorderWidth: "10px",
        legend: {
          display: false
        }
      });
    },
    formatData() {
      let data = { ...this.data }
      data.labels = this.itens.map((item) => {
        return item.firstName + ' ' + item.lastName
      })
      data.datasets[0].data = this.itens.map((item) => {
        return item.participation
      })

      data.datasets[0].backgroundColor = this.colors
      return data
    }
  },
  mounted() {
    this.teste()
  }
};
