import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import {Container, Button, Form, Header, Icon, Segment} from 'semantic-ui-react'

const style = {
  h1: {
    marginTop: '3em'
  },
  h2: {
    margin: '4em 0em 2em'
  },
  h3: {
    marginTop: '2em',
    padding: '2em 0em'
  },
  last: {
    marginBottom: '300px'
  }
}

/**
 * COMPONENT
 */
export class AuthForm extends Component {
  render() {
    const {name, displayName, handleSubmit, error} = this.props
    return (
      <div>
        <Header
          as="h1"
          content={displayName}
          style={style.h1}
          textAlign="center"
        />
        <Container text>
          <form onSubmit={handleSubmit} name={name}>
            <Segment.Group>
              <Segment>
                Email <input name="email" type="text" />
              </Segment>
              <Segment>
                Password <input name="password" type="password" />
              </Segment>
            </Segment.Group>
            <button type="submit">{displayName}</button>
            {error && error.response && <div> {error.response.data} </div>}
          </form>
          <br />
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
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
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
  // handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
