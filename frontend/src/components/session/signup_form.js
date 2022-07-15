import React from "react";
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      firstName: "",
      password: "",
      password2: "",
      errors: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderErrors = this.renderErrors.bind(this)
    this.checkAllFields = this.checkAllFields.bind(this)
  }

  componentDidUpdate() {
    const { errors } = this.props

    if (Object.keys(errors).length > 0 && Object.keys(errors).length !==
      Object.keys(this.state.errors).length) {
      this.setState({ errors: errors })
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    })
  }

  renderErrors(field) {
    return (
      <span className="error-item" key={`error-${field}`}>
        {this.state.errors[field]}
      </span>
    )
  };

  handleSubmit(e) {
    e.preventDefault()
    const { email, firstName, password, password2 } = this.state

    let user = {
      email: email,
      firstName: firstName,
      password: password,
      password2: password2,
    }
    this.props.signup(user)
  }

  checkAllFields() {
    const { email, password } = this.state
    if (email.length && password.length) {
      return true
    } else return false
  }

  render() {
    return (
      <div className="session-wrapper">
        <form className="signup session-form"
          onSubmit={this.handleSubmit}
        >
          <div className="form-input">
            <label htmlFor="signup-email">Email</label>
            <input type={'text'}
              id='signup-email'
              value={this.state.email}
              onChange={this.update('email')}
              placeholder='your@email.com'
              className={this.state.errors.email ? "text-input error" : "text-input"}
            />
            {this.renderErrors('email')}
          </div>

          <div className="form-input">
            <label htmlFor="firstName">First Name</label>
            <input type={'text'}
              id='firstName'
              value={this.state.firstName}
              onChange={this.update('firstName')}
              placeholder='What should we call you?'
              className={this.state.errors.firstName ? "text-input error" : "text-input"}
            />
            {this.renderErrors('firstName')}
          </div>

          <div className="form-input">
            <label htmlFor="password">Password</label>
            <input type={'password'}
              id='password'
              value={this.state.password}
              onChange={this.update('password')}
              className={this.state.errors.password ? "text-input error" : "text-input"}
              placeholder='••••••••••••'
            />
            {this.renderErrors('password')}
          </div>

          <div className="form-input">
            <label htmlFor="password2">Confirm Password</label>
            <input type={'password'}
              id='password2'
              value={this.state.password2}
              onChange={this.update('password2')}
              className={this.state.errors.password2 ? "text-input error" : "text-input"}
              placeholder='••••••••••••'
            />
            {this.renderErrors('password2')}
          </div>
          <button type='submit'
            className={this.checkAllFields() ? 'button-session' : 'button-session disabled'}>
            Signup
          </button>
          <span className="session-alt-link">
            <p>Already have an account?</p>
            <Link to={'/login'}>Login</Link>
          </span>
        </form>
      </div>
    )
  }
}

export default withRouter(SignupForm)