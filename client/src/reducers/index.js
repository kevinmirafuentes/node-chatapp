import { combineReducers } from 'redux'
import messages from './messages'
import auth from './auth'

const rootReducer = combineReducers({
  messages,
  auth
})

export default rootReducer
