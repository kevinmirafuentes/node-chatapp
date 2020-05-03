import * as types from '../constants/ActionTypes'

const authReducer = (state = null, action) => {
  switch (action.type) {
    case types.LOGIN: 
      return state = { 
        _id: 'aj539mx8jk3'
      }
    default: 
      return state
  }
}

export default authReducer