import { connect } from 'react-redux'
import JoinChatroom from '../components/JoinChatroom'
import { joinChatroom } from '../actions'

const mapStateToProps = (state) => {
  const {auth, chatroom} = state
  return { 
    auth, 
    chatroom 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    joinChatroom: (chatroom, name) => dispatch(joinChatroom(chatroom, name))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(JoinChatroom)
