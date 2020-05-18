import * as types from '../constants/ActionTypes'

export const addMessage = message => ({ 
  type: types.ADD_MESSAGE, 
  message 
})

export const getMessages = () => ({ 
  type: types.GET_MESSAGES 
})

export const login = () => ({ 
  type: types.LOGIN 
})

export const openChatroom = () => ({ 
  type: types.OPEN_CHATROOM
})

export const openChatroomSuccess = (chatroom) => ({
  type: types.OPEN_CHATROOM_SUCCESS,
  chatroom
})

export const openChatroomFailed = () => ({
  type: types.OPEN_CHATROOM_FAILED
})

export const joinChatroom = () => ({ 
  type: types.JOIN_CHATROOM 
})

export const createChatroom = () => {
  return (dispatch, getState, axios) => {
    dispatch(openChatroom())
    axios.post('http://localhost:8080/api/chatrooms')
    .then(res => res.data)
    .then(data => dispatch(openChatroomSuccess(data)))
    .catch(err => dispatch(openChatroomFailed(err)))
  }
}