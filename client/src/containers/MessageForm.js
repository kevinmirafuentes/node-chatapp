import { connect } from 'react-redux'
import MessageForm from '../components/MessageForm'
import { addMessage } from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (message) => dispatch(addMessage(message)),
  }
}
export default connect(null, mapDispatchToProps)(MessageForm)
