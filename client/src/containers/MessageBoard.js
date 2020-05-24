import { connect } from 'react-redux'
import MessageBoard from '../components/MessageBoard'
import { getMessages } from '../actions'

const mapStateToProps = (state) => {
  const messages = state.messages
  return { messages }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMessages: () => dispatch(getMessages()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageBoard)
