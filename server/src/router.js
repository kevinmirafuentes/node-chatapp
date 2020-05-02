const { Router } = require('express');
const router = Router();
const listMessagesController = require('./controllers/list-messages')
const createMessageController = require('./controllers/create-message')

router.get('/', (req, res, next) => {
  res.status(200)
  res.json({
    message: 'Hello world!'
  })
})

router.get('/api/messages', listMessagesController)

router.post('/api/messages', createMessageController)

module.exports = router;