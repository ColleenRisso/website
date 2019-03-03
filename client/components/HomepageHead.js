import React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Container,
  Header,
  Icon,
  Image,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from 'semantic-ui-react'

export const HomepageHead = ({mobile}) => (
  <Container text>
    <Image
      src="/img/colleen.png"
      size="medium"
      circular
      style={{
        marginTop: mobile ? '1.5em' : '7em',
        marginLeft: mobile ? '0' : '-3em'
      }}
    />
    <Header
      as="h1"
      content="Hi There!"
      inverted
      style={{
        fontSize: mobile ? '3em' : '4em',
        fontWeight: 'bold',
        marginTop: mobile ? '0' : '-3.5em',
        marginLeft: mobile ? '0' : '2.5em',
        marginBottom: 0
      }}
    />
    <Header
      as="h2"
      content="I'm Colleen Risso"
      inverted
      style={{
        fontSize: mobile ? '1.8em' : '2.5em',
        marginTop: mobile ? '-.20em' : '1em',
        marginLeft: mobile ? '0' : '4em',
        fontWeight: 'normal'
      }}
    />
    <Header
      as="h4"
      content="A tax accountant turned fullstack javascript developer"
      inverted
      style={{
        fontSize: mobile ? '1.250em' : '1.50em',
        fontWeight: 'bold',
        marginTop: mobile ? '0' : '5em',
        marginLeft: mobile ? '0' : '-5em'
      }}
    />
    {/* <Button primary size='huge'>
        Get Started
        <Icon name='right arrow' />
      </Button> */}
  </Container>
)

export default HomepageHead

HomepageHead.propTypes = {
  mobile: PropTypes.bool
}
