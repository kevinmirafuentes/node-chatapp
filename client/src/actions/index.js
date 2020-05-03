import * as types from '../constants/ActionTypes'

export const addMessage = message => ({ type: types.ADD_MESSAGE, message })
export const getMessages = () => ({ type: types.GET_MESSAGES })