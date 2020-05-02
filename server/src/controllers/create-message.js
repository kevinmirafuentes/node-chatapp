const Message = require('../models/Message')

const MongoClient = require('mongodb').MongoClient;
const databaseUrl = 'mongodb://0.0.0.0:27017'
const databaseName = 'chatapp'

const client = new MongoClient(databaseUrl, { useUnifiedTopology: true })

const createMessageController = (req, res, next) => {
  const payload = {
    user_id: req.body.user_id,
    contents: req.body.contents,
    created_at: new Date
  }
  client.connect(function(err) {
    const db = client.db(databaseName)
    const collection = db.collection('messages')
    collection.insertOne(payload, (error, result) => {
      collection.findOne({ _id: result.insertedId }).then(data => {
        res.send({
          message: 'Record successfully created',
          data: data, 
          error: error
        })
      })
    })
  })
}

module.exports = createMessageController