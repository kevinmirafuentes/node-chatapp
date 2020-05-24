import { connect } from 'react-redux'
import Chatroom from '../components/Chatroom'
import { loadChatroom } from '../actions'

const mapStateToProps = (state) => {
  const auth = state.auth
  return { auth }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadChatroom: (id) => dispatch(loadChatroom(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom)
