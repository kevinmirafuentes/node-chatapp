import { combineReducers } from 'redux'
import messages from './messages'
import auth from './auth'
import chatroom from './chatroom'

const rootReducer = combineReducers({
  messages,
  auth,
  chatroom
})

export default rootReducer
