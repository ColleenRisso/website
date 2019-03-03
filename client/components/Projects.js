import React, {Component} from 'react'
import {Button, Grid, Header, Icon, Segment} from 'semantic-ui-react'

export class Projects extends Component {
  constructor() {
    super()
    this.state = {
      LikesP1: 0,
      LikesP2: 0
    }
    this.ClickFirst = this.ClickFirst.bind(this)
    this.ClickSecond = this.ClickSecond.bind(this)
  }

  //The buttons incremement the likes, but I can't get them to actually show it on the button.
  ClickFirst = () => {
    this.setState(prevState => {
      return {LikesP1: prevState.LikesP1 + 1}
    })
  }

  ClickSecond = () => {
    this.setState(prevState => {
      return {LikesP2: prevState.LikesP2 + 1}
    })
  }

  render() {
    console.log('STATE', this.state)
    const {LikesP1, LikesP2} = this.state
    return (
      <Segment
        inverted
        secondary
        color="teal"
        vertical
        style={{padding: '0em'}}
      >
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column textAlign="center">
              <Header
                as="h1"
                inverted
                content="Recent Projects"
                style={{
                  fontSize: '2.75em',
                  fontWeight: 'bold',
                  marginTop: '1em'
                }}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row textAlign="center">
            {/* First Project (Left-Hand Side) */}
            <Grid.Column style={{paddingBottom: '2em', paddingTop: '2em'}}>
              <Header inverted as="h3" style={{fontSize: '2.5em'}}>
                <Icon size="large" name="bomb" />
                disARm
              </Header>
              <p
                style={{
                  fontSize: '1.33em',
                  marginLeft: '6em',
                  marginRight: '6em',
                  marginBottom: '2em'
                }}
              >
                A mobile game in which players search for tools in augmented
                reality to help them disarm a ticking bomb before time runs out.
              </p>
              <Grid.Row>
                <Button
                  color="pink"
                  content="Like"
                  icon="heart"
                  onClick={this.ClickFirst}
                  label={{basic: false, pointing: 'left', content: '100'}}
                />
                <Button
                  icon
                  color="black"
                  href="https://github.com/hunt-ar/HuntAR-Capstone"
                >
                  <Icon name="github" /> See the code
                </Button>
                <Button href="https://youtu.be/Oj8llGXBsYE">
                  Video Presentation
                </Button>
              </Grid.Row>
            </Grid.Column>

            {/* Second Project (Right-Hand Side) */}
            <Grid.Column style={{paddingBottom: '5em', paddingTop: '2em'}}>
              <Header inverted as="h3" style={{fontSize: '2.5em'}}>
                <Icon size="large" name="calculator" />
                Incoming!
              </Header>
              <p
                style={{
                  fontSize: '1.33em',
                  marginLeft: '6em',
                  marginRight: '6em',
                  marginBottom: '2em'
                }}
              >
                A businesss income planning web app which allows users to
                project their business's annual income based on their Income
                Statement.
              </p>
              <Grid.Row>
                <Button
                  color="pink"
                  content="Like"
                  icon="heart"
                  onClick={this.ClickSecond}
                  label={{basic: false, pointing: 'left', content: '50'}}
                />
                <Button
                  icon
                  color="black"
                  href="https://github.com/ColleenRisso/fortune-teller"
                >
                  <Icon name="github" /> See the code
                </Button>
                <Button href="https://youtu.be/Bm_e99U9U_E">
                  Video Presentation
                </Button>
              </Grid.Row>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

export default Projects
