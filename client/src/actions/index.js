import * as types from '../constants/ActionTypes'

export const addMessage = message => ({ 
  type: types.ADD_MESSAGE, 
  message 
})

export const getMessages = () => ({ 
  type: types.GET_MESSAGES 
})

export const setPersona = persona => ({ 
  type: types.SET_PERSONA,
  persona
})

export const createChatroomStart = () => ({ 
  type: types.CREATE_CHATROOM_START,
  isCreatingChatroom: true,
})

export const createChatroomSuccess = (chatroom) => ({
  type: types.CREATE_CHATROOM_SUCCESS,
  chatroom,
  isCreatingChatroom: false,
})

export const createChatroomFailed = () => ({
  type: types.CREATE_CHATROOM_FAILED,
  isCreatingChatroom: false,
})

export const loadChatroomStart = () => ({
  type: types.LOAD_CHATROOM_START,
  isLoadingChatroom: true,
})

export const loadChatroomSuccess = (chatroom) => ({
  type: types.LOAD_CHATROOM_SUCCESS,
  isLoadingChatroom: false,
  chatroom
})

export const loadChatroomFailed = () => ({
  type: types.LOAD_CHATROOM_FAILED,
  isLoadingChatroom: false,
})

export const joinChatroomStart = () => ({
  type: types.JOIN_CHATROOM_START,
  isJoining: true
})

export const joinChatroomSuccess = () => ({
  type: types.JOIN_CHATROOM_SUCCESS,
  isJoining: false
})

export const joinChatroomFailed = () => ({
  type: types.JOIN_CHATROOM_FAILED,
  isJoining: false
})

export const sendMessageStart = () => ({
  type: types.SEND_MESSAGE_START
})

export const sendMessageSuccess = (message, index) => ({
  type: types.SEND_MESSAGE_SUCCESS, 
  message,
  index
})

export const sendMessageFailed = () => ({
  type: types.SEND_MESSAGE_FAILED
})

export const sortMessages = () => ({
  type: types.SORT_MESSAGES
})


export const createChatroom = () => {
  return (dispatch, getState, axios) => {
    dispatch(createChatroomStart())
    axios.post(`${process.env.REACT_APP_SERVER}/api/chatrooms`)
    .then(res => res.data)
    .then(data => dispatch(createChatroomSuccess(data)))
    .catch(err => dispatch(createChatroomFailed(err)))
  }
}

export const loadChatroom = (id) => {
  return (dispatch, getState, axios) => {
    dispatch(loadChatroomStart())
    axios.get(`${process.env.REACT_APP_SERVER}/api/chatrooms/${id}`)
    .then(res => res.data)
    .then(data => {
      dispatch(loadChatroomSuccess(data))
      dispatch(getChatroomPersona(data))
    })
    .catch(err => dispatch(loadChatroomFailed(err)))
  }
}

export const getChatroomPersona = (chatroom) => {
  return (dispatch, getState) => {
    const persona = JSON.parse(localStorage.getItem(`chatroom_${chatroom._id}`))
    dispatch(setPersona(persona))
  }
}

export const joinChatroom = (chatroom, name) => {
  return (dispatch, getState, axios) => {
    dispatch(joinChatroomStart())
    const payload = {
      chatroom_id: chatroom._id,
      name: name,
    } 
    axios.post(`${process.env.REACT_APP_SERVER}/api/users`, payload)
    .then(res => res.data)
    .then(data => {
      dispatch(joinChatroomSuccess(data))
      localStorage.setItem(`chatroom_${chatroom._id}`, JSON.stringify(data))
      dispatch(getChatroomPersona(chatroom))
    })
    .catch(err => dispatch(joinChatroomFailed(err)))
  }
}

export const runMessageQueue = () => {
  return (dispatch, getState, axios) => {
    const { messages } = getState()
    if (messages.isSendingMessage) 
      return false

    const queue = messages.messages
                  .map((message, index) => ({index, message}))
                  .filter((data) => !data.message._id)

    if (queue.length < 1) 
      return false

    const subject = {...queue[0]}

    dispatch(sendMessageStart())

    const payload = {
      chatroom_id: subject.message.chatroom_id,
      user_id: subject.message.sender._id,
      contents: subject.message.contents,
    }

    axios.post(`${process.env.REACT_APP_SERVER}/api/messages`, payload)
    .then(response => response.data)
    .then(data => {
      subject.message._id = data._id
      dispatch(sendMessageSuccess(subject.message, subject.index))
      dispatch(runMessageQueue())
    })
  }
}