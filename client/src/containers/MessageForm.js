import { connect } from 'react-redux'
import MessageForm from '../components/MessageForm'
import { runMessageQueue, addMessage } from '../actions'

const mapStateToProps = (state) => {
  const {auth} = state
  return { 
    auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (message) => dispatch(addMessage(message)),
    runMessageQueue: () => dispatch(runMessageQueue()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MessageForm)
