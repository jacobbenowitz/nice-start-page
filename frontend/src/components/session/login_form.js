import React from "react";
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      errors: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderErrors = this.renderErrors.bind(this)
    this.checkAllFields = this.checkAllFields.bind(this)
  }

  componentDidUpdate() {
    if (!!this.props.errors) {
      this.setState({errors: this.props.errors})
    }
  }

  update(field) {
    return e => this.setState({
      [field] : e.target.value
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
    const { email, password } = this.state

    let user = {
      email: email,
      password: password
    }
    this.props.login(user).then(() => 
      this.props.history.push('/home')
    )
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
        <form className="login session-form"
          onSubmit={this.handleSubmit}
        >
          <div className="form-input">
            <label htmlFor="email">Email</label>
            <input type={'text'}
              id='login-email'
              value={this.state.email}
              onChange={this.update('email')}
              placeholder='your@email.com'
              className={this.state.errors.email ? "text-input error" : "text-input"}
            />
            {this.renderErrors('email')}
          </div>

          <div className="form-input">
            <label htmlFor="password">Password</label>
            <input type={'password'}
              id='password'
              value={this.state.password}
              onChange={this.update('password')}
              placeholder='password'
              className={this.state.errors.password ? "text-input error" : "text-input"}
            />
            {this.renderErrors('password')}
          </div>
          <button type='submit'
            className={this.checkAllFields() ? 'button-session' : 'button-session disabled'}>
            Login
          </button>
          <span className="session-alt-link">
            <p>Don't have an account?</p>
            <Link to={'/signup'}>Sign Up</Link>
          </span>
        </form>
      </div>
    )
  }
}

export default withRouter(LoginForm)