const { User } = require('../model')

module.exports = app => {

  // Get all users
  app.get('/api/user', (req, res) => {
    User.find({})
    // .then(res => res.sendStatus(200))
    .then(user => res.json(user))
    .catch(e => console.log(e))
  })

  //Save name and email, 

  app.post('/api/user', (req, res) => {
    User.create(req.body)
    .then(user => res.json(user))
    .catch(e => console.log(e))
  })
}