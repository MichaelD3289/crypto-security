const bcrypt = require('bcryptjs');
const users = [];

module.exports = {
  login: (req, res) => {
    const { username, password } = req.body
    
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username) {
        const authenticated = bcrypt.compareSync(password, users[i].passHash)
        if (authenticated) {
          let userCopy = {...users[i]}
          delete userCopy.passHash
          res.status(200).send(userCopy)
        }
      }
    }
    res.status(400).send("User not found.")
  },
  register: (req, res) => {
      const { username, email, firstName, lastName, password } = req.body
      const salt = bcrypt.genSaltSync(5)
      const passHash = bcrypt.hashSync(password, salt)

      let user = {
        username: username,
        email: email,
        firstName: firstName,
        lastName: lastName,
        passHash: passHash
      }

      users.push(user)
      let userCopy = {...user}
      delete userCopy.passdHash

      res.status(200).send(userCopy)
  }
}