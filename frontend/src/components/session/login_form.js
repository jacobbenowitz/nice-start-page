import React from "react";
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
import InputPassword from "../form/input_password";
import LabeledInput from "../form/labeled_input";

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      errors: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderErrors = this.renderErrors.bind(this)
    this.checkAllFields = this.checkAllFields.bind(this)
  }

  componentDidUpdate() {
    // debugger
    if (this.props.errors.length &&
      this.state.errors.length !== this.props.errors.length) {
      this.setState({ errors: this.props.errors })
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
    const { email, password } = this.state

    let user = {
      email: email,
      password: password
    }
    this.props.login(user)
  }

  checkAllFields() {
    const { email, password } = this.state
    if (email.length && password.length) {
      return true
    } else return false
  }

  render() {
    // debugger
    return (
      <div className="w-screen h-screen flex items-center justify-center place-content-center">
        <form className="flex w-72 flex-col bg-gray-800 px-12 py-6 rounded-xl"
          onSubmit={this.handleSubmit}
        >
          <h3 className="mb-6 text-center">Login</h3>
          <LabeledInput
            type={'email'}
            label={'Email'}
            id={'login-email'}
            value={this.state.email}
            handleChange={this.update('email')}
            placeholder={'your@email.com'}
            errors={this.renderErrors('email')}
          />
          <LabeledInput
            type={'password'}
            label={'Password'}
            id={'login-password'}
            value={this.state.password}
            handleChange={this.update('password')}
            placeholder={'••••••••••••'}
            errors={this.renderErrors('password')}
          />
          <div className="spacer w-full h-4" />
          <button type='submit'
            className='bg-gray-300 font-bold text-center w-max text-gray-900
            px-4 py-1 rounded-md
            hover:bg-gray-50
            focus:ring-2 focus:ring-amber-300'>
            Login
          </button>
          <div className="flex flex-col mt-8 gap-2">
            <p>Don't have an account?</p>
            <Link to={'/signup'}>Sign Up</Link>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(LoginForm)