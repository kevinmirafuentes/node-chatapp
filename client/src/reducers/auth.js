import * as types from '../constants/ActionTypes'

const authReducer = (state = null, action) => {
  switch (action.type) {
    case types.SET_PERSONA: 
      return state = action.persona
    default: 
      return state
  }
}

export default authReducer