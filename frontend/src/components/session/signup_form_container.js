import { connect } from 'react-redux';
import { singup } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = state => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(singup(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)