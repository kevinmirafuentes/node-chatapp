const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  chatroom_id: {
    type: Schema.Types.ObjectId, 
    ref: 'Chatroom',
    required: true,
  },
  name: {
    type: String,
    required: true,
  }
}, { timestamps: true })

module.exports = model('User', userSchema)