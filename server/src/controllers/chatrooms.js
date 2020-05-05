const Chatroom = require('../models/Chatroom')

const createChatroom = (req, res, next) => {
  const chatroom = new Chatroom;
  chatroom.save(err => {
    next(new Error(err))
  })
  res.json(chatroom)
}

module.exports = {
  createChatroom
}