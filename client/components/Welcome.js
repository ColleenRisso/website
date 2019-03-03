import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {Responsive, Segment, Visibility} from 'semantic-ui-react'
import Projects from './Projects'
import AboutShort from './AboutShort'
import OtherInfo from './OtherInfo'
import Footer from './Footer'
import HomepageHead from './HomepageHead'
import Navbar from './Navbar'
import NavbarMobile from './NavbarMobile'

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  render() {
    const {children} = this.props

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          {/* Colored Block for Header Starts Here */}
          <Segment
            inverted
            color="teal"
            textAlign="center"
            style={{minHeight: 650, padding: '1em 0em'}}
            vertical
          >
            {/* Navbar Goes Here */}
            <Navbar />
            {/* Header For My Into Goes Here */}
            <HomepageHead />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
}

const ResponsiveContainer = ({children}) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <NavbarMobile>{children}</NavbarMobile>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    {/* ABOUT ME SECTION*/}
    <AboutShort />

    {/* PROJECTS SECTION*/}
    <Projects />

    {/* Other Articles Section */}
    <OtherInfo />

    {/* Footer Section   */}
    <Footer />
  </ResponsiveContainer>
)
export default HomepageLayout
