import React, {Component} from 'react'
import {Header, Segment, Image} from 'semantic-ui-react'

const style = {
  hi: {
    marginTop: '1em',
    marginLeft: '5em'
  },
  name: {
    marginLeft: '7em'
  },
  pic: {
    border: 'black'
  }
}

export class Colleen extends Component {
  render() {
    return (
      <div>
        <Segment>
          <Image
            src="/img/colleen.png"
            size="medium"
            style={style.pic}
            circular
          />
        </Segment>

        <Header
          id="header_hi"
          as="h1"
          content="Hi There!"
          style={style.hi}
          textAlign="left"
        />

        <Header
          id="header_name"
          as="h1"
          content="I'm Colleen Risso"
          style={style.name}
          textAlign="left"
        />
      </div>
    )
  }
}

export default Colleen
