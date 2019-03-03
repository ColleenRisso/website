import React, {Component} from 'react'
import {Button, Container, Menu} from 'semantic-ui-react'

export class Navbar extends Component {
  state = {}

  hideFixedMenu = () => this.setState({fixed: false})
  showFixedMenu = () => this.setState({fixed: true})

  render() {
    const {children} = this.props
    const {fixed} = this.state

    return (
      <Menu
        fixed={fixed ? 'top' : null}
        inverted={!fixed}
        pointing={!fixed}
        secondary={!fixed}
        size="large"
      >
        <Container>
          <Menu.Item as="a" active>
            Home
          </Menu.Item>
          <Menu.Item as="a">About</Menu.Item>
          <Menu.Item as="a">Projects</Menu.Item>
          <Menu.Item as="a">Career</Menu.Item>
          <Menu.Item as="a">Resume</Menu.Item>
          <Menu.Item position="right">
            <Button as="a" inverted={!fixed}>
              Log in
            </Button>
            <Button
              as="a"
              inverted={!fixed}
              primary={fixed}
              style={{marginLeft: '0.5em'}}
            >
              Sign Up
            </Button>
          </Menu.Item>
        </Container>
      </Menu>
    )
  }
}

export default Navbar
