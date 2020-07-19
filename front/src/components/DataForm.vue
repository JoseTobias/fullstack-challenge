<template>
  <form @submit.prevent="submit">
    <input v-model="firstName" type="text" name="firstName" value>

    <input v-model="lastName" type="text" name="lastName" value>

    <input v-model="participation" @blur="checkParticipation" type="number" name="participation" value>

    <button type="submit" name="button">
      SEND
    </button>

    <p v-if="!errorIsEmpty">{{ error }}</p>
  </form>
</template>

<script>
export default {
  name: 'data-form',
  data() {
    return {
      firstName: '',
      lastName: '',
      participation: '',
      error: {}
    }
  },
  methods: {
    submit() {

    },
    number(event) {
      this.participation += event.key.replace(/[^\d]/g, "")
    },
    checkParticipation() {
      if(this.participation > 100 || this.participation < 0) {
        this.$set(this.error, 'participation', 'participation should be in percentage')
      }
      else {
        if(this.error.participation){
          this.$delete(this.error, 'participation')
        }
      }
    }
  },
  computed: {
    errorIsEmpty: function() {
      if(Object.keys(this.error).length === 0) {
        return true
      }
      return false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
