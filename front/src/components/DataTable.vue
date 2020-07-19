<template>
  <div class="table">
    <table>
      <thead>
        <tr>
          <th></th>
          <th>firstName</th>
          <th>lastName</th>
          <th>participation</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in itens" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.firstName }}</td>
          <td>{{ item.lastName }}</td>
          <td>{{ formatPercentage(item.participation) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'data-table',
  props: {
    itens: {
      type: Array,
      required: true
    }
  },
  methods: {
    formatPercentage(number) {
      return `${number}%`
    }
  },
}
</script>

<style scoped lang="scss">
.table {
  width: 50%;
  table {
    border-collapse: collapse;
    border-color: transparent;
    width: 100%;
    th, td {
      padding: 10px 15px;
      border: 1px solid #B8B8BA;
      color: #7A7A7B;
      text-align: left;
      &:last-child, &:first-child {
        text-align: center;
      }
    }
  }
}
</style>
