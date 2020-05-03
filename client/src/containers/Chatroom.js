import { connect } from 'react-redux'
import Chatroom from '../components/Chatroom'

const mapStateToProps = (state) => {
  const auth = state.auth
  return { auth }
}

export default connect(mapStateToProps)(Chatroom)
