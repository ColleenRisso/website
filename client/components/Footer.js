import React, {Component} from 'react'
import {Container, Grid, Header, Icon, List, Segment} from 'semantic-ui-react'

export class Footer extends Component {
  render() {
    return (
      <Segment inverted vertical color="teal" style={{padding: '2em 0em'}}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="More Info" />
                <List link inverted>
                  <List.Item as="a">
                    <Icon name="sitemap" /> Sitemap
                  </List.Item>
                  <br />
                  <List.Item as="a">
                    <Icon name="info" /> Resources
                  </List.Item>
                  <br />
                  <List.Item as="a">
                    <Icon name="bullhorn" /> Special Thanks
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Interests" />
                <List link inverted>
                  <List.Item as="p">
                    <Icon name="chess pawn" /> Board Games
                  </List.Item>
                  <List.Item as="p">
                    <Icon name="code" /> Tech Meetups
                  </List.Item>
                  <List.Item as="p">
                    <Icon name="cut" /> Arts & Crafts
                  </List.Item>
                  <List.Item as="p">
                    <Icon name="language" /> Foreign Languages
                  </List.Item>
                  <List.Item as="p">
                    <Icon name="gamepad" /> Videogames
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={5}>
                <Header as="h3" inverted>
                  Contact Me
                </Header>
                <Icon size="large" name="mail outline" />
                <p style={{marginLeft: '2.25em', marginTop: '-1.25em'}}>
                  ColleenRisso@gmail.com
                </p>
                <Icon size="large" name="github" />
                <p style={{marginLeft: '2.25em', marginTop: '-1.25em'}}>
                  github.com/ColleenRisso
                </p>
                <Icon size="large" name="linkedin" />
                <p style={{marginLeft: '2.25em', marginTop: '-1.25em'}}>
                  linkedin.com/in/colleenrisso
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    )
  }
}

export default Footer
