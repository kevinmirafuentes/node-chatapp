const MongoClient = require('mongodb').MongoClient;
const databaseUrl = 'mongodb://localhost:27017';
const databaseName = 'database';

const database = {
  connect() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(databaseUrl, function(err, client) {
          if (err === null) {
            reject(err)
          } else {
            resolve(client.db(databaseName))
          }
        });
    })
  }
}

module.exports = database