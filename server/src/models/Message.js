const {Schema, model} = require('mongoose')

const messageSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId, 
    ref: 'User',
    required: true,
  },
  chatroom_id: {
    type: Schema.Types.ObjectId, 
    ref: 'Chatroom',
    required: true,
  },
  contents: String,
}, { timestamps: true })

module.exports = model('Message', messageSchema)