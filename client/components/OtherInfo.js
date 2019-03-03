import React, {Component} from 'react'
import {Button, Container, Divider, Header, Segment} from 'semantic-ui-react'

export class OtherInfo extends Component {
  render() {
    return (
      <Segment style={{padding: '6em 0em'}} vertical>
        <Container text>
          <Header as="h3" style={{fontSize: '2em'}}>
            This Section For More Info
          </Header>
          <p style={{fontSize: '1.33em'}}>
            I know I have more important things I want to have on the front
            page. This is a perfect place to showcase them! I'm going to leave
            this section available for now just in case. No use deleting it now
            just to decide later that I might want to and have to code it in
            later.
          </p>
          <Button as="a" size="large" color="pink">
            Check It Out
          </Button>
          <Divider
            as="h4"
            className="header"
            horizontal
            style={{margin: '3em 0em', textTransform: 'uppercase'}}
          >
            <a href="#">This Link Has Some Cool Info</a>
          </Divider>
          <Header as="h3" style={{fontSize: '2em'}}>
            I Don't Want to Exclude This Info
          </Header>
          <p style={{fontSize: '1.33em'}}>
            Who knows if I'll also want this section. In that case, I'm also
            leaving this coding available to fill in when ready. Who knows what
            fun things I might need to talk about!
          </p>
          <Button as="a" size="large" color="pink">
            Tell Me About Fun Things
          </Button>
        </Container>
      </Segment>
    )
  }
}

export default OtherInfo
