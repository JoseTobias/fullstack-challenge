const Person = require('../models/Person');

exports.person_create = async (req, res) => {
  const { firstName, lastName, participation } = req.body

  const personExists = await Person.findOne({ firstName, lastName })

  if(personExists) {
    if(personExists.participation == participation) {
      return res.json(personExists)
    }

    const person = await Person.updateOne({ _id: personExists._id }, {
      firstName,
      lastName,
      participation
    })

    return res.send('updated')
  }

  const person = await Person.create({
    firstName,
    lastName,
    participation
  })

  return res.json(person)
}

exports.person_get = async (req, res) => {
  const persons = await Person.find({}).sort({ participation: 1 })

  return res.json(persons)
}