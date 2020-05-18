import { connect } from 'react-redux'
import Home from '../components/Home'
import { createChatroom } from '../actions'

const mapStateToProps = (state) => {
  const chatroom = state.chatroom
  return { chatroom }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createChatroom: () => dispatch(createChatroom()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
