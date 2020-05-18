import * as types from '../constants/ActionTypes'

const chatroomReducer = (state = {}, action) => {
  switch (action.type) {
    case types.OPEN_CHATROOM: 
      return {
        ...state, 
        isCreatingChatroom: true,
      }
    case types.OPEN_CHATROOM_SUCCESS: 
      return {
        ...state, 
        isCreatingChatroom: false,
        _id: action.chatroom._id
      }
    case types.OPEN_CHATROOM_FAILED: 
      return {
        ...state, 
        isCreatingChatroom: false,
        _id: null
      }
    default:
      return state
  }
}

export default chatroomReducer