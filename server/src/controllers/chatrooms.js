const Chatroom = require('../models/Chatroom')

const createChatroom = (req, res, next) => {
  const chatroom = new Chatroom;
  chatroom.save(err => {
    next(new Error(err))
  })
  res.json(chatroom)
}

const getChatroom = (req, res, next) => {
  Chatroom.findById(req.params.chatroom, (err, chatroom) => {
    if (!err) res.json(chatroom)
    else next(new Error(err))
  })
}

module.exports = {
  createChatroom,
  getChatroom,
}