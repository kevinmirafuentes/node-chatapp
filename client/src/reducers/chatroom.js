import * as types from '../constants/ActionTypes'

const chatroomReducer = (state = {}, action) => {
  const newState = { ...state }
  switch (action.type) {
    case types.CREATE_CHATROOM_START: 
      newState.isCreatingChatroom = true
      return newState
    case types.CREATE_CHATROOM_SUCCESS: 
      newState.isCreatingChatroom = false
      newState._id = action.chatroom._id
      return newState
    case types.CREATE_CHATROOM_FAILED: 
      newState.isCreatingChatroom = false
      newState._id = null 
      return newState  
    case types.LOAD_CHATROOM_SUCCESS: 
      newState._id = action.chatroom._id
      newState.isLoadingChatroom = true
      return newState
    default:
      return state
  }
}

export default chatroomReducer