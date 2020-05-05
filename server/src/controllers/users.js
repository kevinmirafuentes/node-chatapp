const User = require('../models/User')
const url = require('url');

const createUser = async (req, res, next) => {
  try {
    const user = new User(req.body)
    const createdUser = await user.save()
    res.json(createdUser)
  } catch (error) {
    next(error)
  }
}

const listUsers = async (req, res, next) => {
  try {
    const query = url.parse(req.url, true).query;
    const users = await User.find(query);
    res.json(users);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createUser,
  listUsers,
}
