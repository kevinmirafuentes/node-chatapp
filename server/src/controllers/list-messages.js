const Message = require('../models/Message')

const MongoClient = require('mongodb').MongoClient
const databaseUrl = 'mongodb://0.0.0.0:27017'
const databaseName = 'chatapp'

const client = new MongoClient(databaseUrl, { useUnifiedTopology: true })

const listMessagesController = (req, res, next) => {
  client.connect(function(err) {
    const db = client.db(databaseName)
    const collection = db.collection('messages')
    
    collection.find({}).sort({ created_at: -1}).toArray().then(data => {
      res.json(data)
    })
  })
}

module.exports = listMessagesController