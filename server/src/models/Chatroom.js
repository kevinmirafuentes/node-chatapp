const {Schema, model} = require('mongoose')

const chatroomSchema = new Schema({}, { timestamps: true })

module.exports = model('Chatroom', chatroomSchema)