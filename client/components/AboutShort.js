import React, {Component} from 'react'
import {Button, Grid, Header, Image, Segment} from 'semantic-ui-react'

export class AboutShort extends Component {
  render() {
    return (
      <Segment style={{padding: '3em 0em 0em 0em'}} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Header
                as="h1"
                content="Just A Little Bit About Me"
                style={{
                  fontSize: '2.75em',
                  fontWeight: 'bold',
                  margin: 'center'
                }}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column floated="right" width={5}>
              <Image bordered rounded size="large" src="/img/img2.jpg" />
            </Grid.Column>
            <Grid.Column width={6}>
              <Header as="h3" style={{fontSize: '1.70em'}}>
                Change of Career
              </Header>
              <p style={{fontSize: '1.33em'}}>
                After four years as a tax accountant I realized there was a
                creative lacking going unfulfilled. After one coding class I was
                absolutely hooked! I find the two careers require a lot of the
                same skills, but there's something so enjoyable about coding
                that makes me happy to be a developer.
              </p>
              <Header as="h3" style={{fontSize: '1.70em'}}>
                Giving Back
              </Header>
              <p style={{fontSize: '1.33em'}}>
                I enjoy volunteering and giving back wherever my skillsets can
                provide value. I'm the Treasurer of Softec and always looking
                for more ways to help out in the tech community. Currently I'm
                assisting with the teaching on the new CodeSLO bootcamp night
                classes.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={5}>
              <Image bordered rounded size="large" src="/img/img1.png" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Button
                color="pink"
                size="huge"
                style={{
                  marginBottom: '5em'
                }}
              >
                Want To Know More?
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

export default AboutShort
