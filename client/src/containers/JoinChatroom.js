import { connect } from 'react-redux'
import JoinChatroom from '../components/JoinChatroom'
import { login } from '../actions'

const mapStateToProps = (state) => {
  const auth = state.auth
  return { auth }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(login())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(JoinChatroom)
