const database = require('../database')

class Message {

  constructor(data) {
    if (data) {
      this.id = data.id || null
      this.contents = data.contents || null 
      this.user_id = data.user_id || null
    }
  }

  save() {
    if (!this.id) {
      this.insert(this)
    }
  }

  insert(data) {
    database.connect().then(client => {
      client.collection('messages', {
        user_id: data.user_id || null,
        contents: data.contents || null,
        date: new Date
      })
    })
  }
}

module.exports = Message