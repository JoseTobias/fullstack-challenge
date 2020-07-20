<template>
  <div id="app">
    <data-form @submit="submit" :key="persons.length"/>
    <div class="app-body container">
      <h2>Data</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      <data-container :itens="persons" />
    </div>
  </div>
</template>

<script>
import DataForm from './components/DataForm.vue'
import DataContainer from './components/DataContainer.vue'

export default {
  name: 'App',
  components: {
    DataForm,
    DataContainer,
  },
  data() {
    return {
      persons: [],
    }
  },
  methods: {
    getPersons() {
      fetch('http://localhost:3030/')
        .then(resp => resp.json())
        .then(resp => {this.persons = resp})
    },
    submit(payload) {
      fetch('http://localhost:3030/', {
        method: "POST",
        headers: { 
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(payload)
      }).then(() => this.getPersons())
    }
  },
  mounted() {
    this.getPersons()
  }
}
</script>

<style lang="scss">

* {
  box-sizing: border-box;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

input {
  border: none;
  border-radius: 2px;
}

body {
  margin: 0;
}

.container {
  max-width: auto;
  margin: 0 auto;
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .app-body {
    margin-top: 30px;
  }
}
</style>
