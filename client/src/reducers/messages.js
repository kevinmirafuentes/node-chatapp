import * as types from '../constants/ActionTypes'

const transformMessagePayload = (message) => {
  const {  _id, chatroom_id, name } = message.sender
  return {
    _id: null,
    sender: {
      _id, 
      chatroom_id,
      name,
    },
    contents: message.contents,
    chatroom_id,
    created_at: new Date().toDateString()
  }
}

const messagesReducer = (state = { 
  messages: [],
  isSendingMessage: false
}, action) => {

  const newState = { ...state }
  
  const sortMessages = () => {
    newState.messages.sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
  }

  switch (action.type) {  
    case types.SORT_MESSAGES: 
      sortMessages()
      return newState
    case types.SEND_MESSAGE_START: 
      newState.isSendingMessage = true;
      return newState
    case types.SEND_MESSAGE_SUCCESS: 
      newState.messages[action.index] = action.message 
      newState.isSendingMessage = false;
      sortMessages()
      return newState
    case types.SEND_MESSAGE_FAILED: 
      newState.isSendingMessage = false;
      return newState
    case types.ADD_MESSAGE: 
      newState.messages.push(transformMessagePayload(action.message))
      return newState
    // todo: make api call
    case types.GET_MESSAGES: 
    default: 
      return state
  }
}

export default messagesReducer