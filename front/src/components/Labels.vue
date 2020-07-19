<template>
  <div class="labels">
    <div class="label" v-for="(item, index) in itens" :key="index">
      <div class="square" :style="{ backgroundColor: colors[index]}"></div>
      <label :style="{ color: colors[index]}" > {{ item.firstName + ' ' + item.lastName}}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'labels',
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
}
</script>

<style scoped lang="scss">
.labels {
  display: flex;
  flex-direction: column;
  justify-content: center;
  .label {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .square {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }
}
</style>
