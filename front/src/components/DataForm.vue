<template>
  <div class="top">
    <div class="container">
      <form @submit.prevent="submit">
        <div class="first-name">

          <input
            :class="{error: error.firstName}"
            v-model="firstName"
            @blur="checkFirstName"
            type="text"
            name="firstName"
            placeholder="First name"
            value>

          <span v-if="error.firstName">{{ error.firstName }}</span>
        </div>


        <div class="last-name">

          <input
            :class="{error: error.lastName}"
            v-model="lastName"
            @blur="checkLastName"
            type="text"
            name="lastName"
            placeholder="Last name"
            value>

          <span v-if="error.lastName">{{ error.lastName }}</span>
        </div>

        <div class="participation">

          <input
          :class="{error: error.participation}"
          v-model="participation"
          @blur="checkParticipation"
          type="number"
          name="participation"
          placeholder="Participation"
          value>

          <span v-if="error.participation">{{ error.participation }}</span>
        </div>

        <div class="submit">
          <button type="submit" name="button">
            SEND
          </button>
        </div>
      </form>
    </div>
  </div>
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
      this.checkField()
      if(this.errorIsEmpty) {
        this.$emit('submit', {
          firstName: this.firstName,
          lastName: this.lastName,
          participation: this.participation
        })
      }
    },
    checkField() {
      this.checkFirstName()
      this.checkLastName()
      this.checkParticipation()
    },
    number(event) {
      this.participation += event.key.replace(/[^\d]/g, "")
    },
    checkParticipation() {
      if(this.participation > 100 || this.participation < 0 || this.participation == 0) {
        this.$set(this.error, 'participation', 'Participation should be in percentage.')
      }
      else {
        if(this.error.participation){
          this.$delete(this.error, 'participation')
        }
      }
    },
    checkFirstName() {
      if(this.firstName === '') {
        this.$set(this.error, 'firstName', 'Participation should be a name.')
      }
      else {
        this.$delete(this.error, 'firstName')
      }
    },
    checkLastName() {
      if(this.lastName === '') {
        this.$set(this.error, 'lastName', 'Participation should be a last name.')
      }
      else {
        this.$delete(this.error, 'lastName')
      }
    },
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

<style scoped lang="scss">
.top {
  background-color: #48B9E7;
  padding: 30px;
  form {
    display: flex;
    justify-content: center;
    @media (max-width: 767px) {
      flex-direction: column;
    }
    .first-name {
      display: flex;
      flex: 1;
      flex-direction: column;
      margin-right: 20px;
      @media (max-width: 767px) {
        margin-right: 0;
        margin-bottom: 20px;
      }
    }
    .last-name {
      display: flex;
      flex: 1;
      flex-direction: column;
      margin-right: 20px;
      @media (max-width: 767px) {
        margin-right: 0;
        margin-bottom: 20px;
      }
    }
    .participation {
      display: flex;
      flex: 1;
      flex-direction: column;
      margin-right: 20px;
      @media (max-width: 767px) {
        margin-right: 0;
        margin-bottom: 20px;
      }
    }
    input {
      height: 40px;
      padding: 0 10px;
      outline-color: transparent;
      border: solid transparent 1px;
      &.error:not(:focus) {
        border: solid red 1px;
      }
    }
    button {
      background: transparent;
      border: solid #fff 2px;
      padding: 10px 30px;
      color: #fff;
      font-weight: bold;
      height: 42px;
      &:hover {
        opacity: 0.8;
      }
    }
    span {
      color: #fff;
      font-size: 14px;
      text-align: left;
      padding: 0 10px;
    }
  }
}
</style>
