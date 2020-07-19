const { Schema, model } = require('mongoose');

const PersonSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  participation: {
    type: Number,
    required: true,
  },
});

module.exports = model('Person', PersonSchema);