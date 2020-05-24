const { Router } = require('express');
const router = Router();
const userController = require('./controllers/users')
const messageController = require('./controllers/messages')
const chatroomController =  require('./controllers/chatrooms')

router.get('/', (req, res, next) => {
  res.status(200)
  res.json({
    message: 'Hello world!'
  })
})

router.get('/api/messages', messageController.listMessages)
router.post('/api/messages', messageController.createMessage)
router.get('/api/users', userController.listUsers)
router.post('/api/users', userController.createUser)
router.post('/api/chatrooms', chatroomController.createChatroom)
router.get('/api/chatrooms/:chatroom', chatroomController.getChatroom)

module.exports = router;