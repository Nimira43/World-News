const authModel = require('../models/authModel')

class authController {
  login = async(req, res) => {
    console.log('This is the Controller.')
    console.log('Controller hit.')
    console.log('Body:', req.body)
    res.send('ok')
    const user = await authModel.findOne({ email: req.body.email });
    console.log('User from DB:', user);
  }
}

module.exports = new authController()