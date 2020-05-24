import * as types from '../constants/ActionTypes'

const chatroomReducer = (state = {}, action) => {
  switch (action.type) {
    case types.CREATE_CHATROOM_START: 
      return {
        ...state, 
        isCreatingChatroom: action.isCreatingChatroom,
      }
    case types.CREATE_CHATROOM_SUCCESS: 
      return {
        ...state,
        isCreatingChatroom: action.isCreatingChatroom,
        _id: action.chatroom._id
      }
    case types.CREATE_CHATROOM_FAILED: 
      return {
        ...state, 
        isCreatingChatroom: action.isCreatingChatroom,
        _id: null
      }
    case types.LOAD_CHATROOM_SUCCESS: 
      return {
        ...state, 
        _id: action.chatroom._id
      }
    default:
      return state
  }
}

export default chatroomReducer