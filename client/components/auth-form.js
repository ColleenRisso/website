import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import {Container, Button, Form, Header, Icon} from 'semantic-ui-react'

const style = {
  h1: {
    marginTop: '3em'
  }
}

/**
 * COMPONENT
 */
export class AuthForm extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      formName: '',
      error: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.setState({
      formName: this.props.name
    })
  }

  // handleSubmit(evt) {
  //   evt.preventDefault()
  //   const formName = this.state.formName
  //   const email = this.state.email
  //   const password = this.state.password
  //   this.props.auth(email, password, formName)
  // }

  render() {
    const {name, displayName, handleSubmit, error} = this.props
    console.log(this.state)
    return (
      <div>
        <Header
          as="h1"
          content={displayName}
          style={style.h1}
          textAlign="center"
        />

        <Container>
          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <Form.Input
                label="Email"
                name="email"
                value={this.state.email}
                required={true}
                onChange={e => this.setState({email: e.target.value})}
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                label="Password"
                name="password"
                value={this.state.password}
                required={true}
                onChange={e => this.setState({password: e.target.value})}
              />
            </Form.Field>

            <Form.Button type="submit">{displayName}</Form.Button>

            {error && error.response && <div> {error.response.data} </div>}
          </Form>
          <br />

          <Button color="google plus">
            <Icon name="google plus" />
            Sign In With Google
          </Button>
        </Container>
      </div>
    )
  }
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = this.state.formName
      const email = this.state.email
      const password = this.state.password
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
