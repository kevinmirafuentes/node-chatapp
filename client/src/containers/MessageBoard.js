import { connect } from 'react-redux'
import MessageBoard from '../components/MessageBoard'
import { getMessages } from '../actions'

const mapStateToProps = (state) => {
  const messages = state.messages
  return { messages }
}

export default connect(mapStateToProps, { getMessages })(MessageBoard)
