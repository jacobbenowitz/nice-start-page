import React from "react";
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import InputText from "../form/input_text";
import InputPassword from "../form/input_password";
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
      <div className="w-screen h-screen flex items-center justify-center place-content-center">
        <form className="flex flex-col w-72 bg-gray-800 px-12 py-6 rounded-xl"
          onSubmit={this.handleSubmit}>
          <h3 className="mb-10 text-center">Signup</h3>
          <InputText
            label="Email"
            id="signup-email"
            handleChange={this.update('email')}
            value={this.state.email}
            placeholder='your@email.com'
            errors={this.renderErrors('email')}
          />
          <InputText
            label="First Name"
            id="signup-name"
            handleChange={this.update('firstName')}
            value={this.state.firstName}
            placeholder='Name'
            errors={this.renderErrors('firstName')}
          />
          <InputPassword
            label="Password"
            id='password'
            value={this.state.password}
            handleChange={this.update('password')}
          />
          <InputPassword
            label="Confirm Password"
            id='password2'
            value={this.state.password2}
            handleChange={this.update('password2')}
          />
          <button type='submit'
            className='bg-gray-300 font-bold text-center w-max text-gray-900
            px-4 py-1 rounded-md
            hover:bg-gray-50
            focus:ring-2 focus:ring-amber-300'>
            Signup
          </button>
          <div className="flex flex-col mt-8 gap-2">
            <p>Already have an account?</p>
            <Link to={'/login'}>Login</Link>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SignupForm)