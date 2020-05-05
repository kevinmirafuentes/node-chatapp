const Message = require('../models/Message')
const url = require('url')

const listMessages = async (req, res, next) => {
  try {
    const query = url.parse(req.url, true).query;
    const messages = await Message.find(query);
    res.json(messages);
  } catch (error) {
    next(error);
  }
}

const createMessage = async (req, res, next) => {
  try {
    const message = new Message(req.body)
    const createdMessage = await message.save()
    res.json(createdMessage)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  listMessages,
  createMessage
}