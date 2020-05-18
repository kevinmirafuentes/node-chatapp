import * as types from '../constants/ActionTypes'

/*
State form
[
  {
    sender: {
      name: 'john'
    },
    contents: 'Some message'
  }
]
*/

const messagesReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_MESSAGE: 
      return [
        ...state, 
        {
          sender: {
            name: action.message.sender.name
          },
          contents: action.message.contents
        }
      ]
    
    // todo: make api call
    case types.GET_MESSAGES: 
      return [
        { sender: { name: 'mike'}, contents: 'Lorem ipsum dolor sit amet.'}
      ]
    
    default: 
      return state
  }
}

export default messagesReducer