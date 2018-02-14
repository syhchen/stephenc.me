import React from 'react'
import Link from 'gatsby-link'

import '../components/reset.css'
import '../components/index.less'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header
    if (location.pathname != '/') {
      header = (
        <div>
          <Link to={'/'}>
            Home
          </Link>
        </div>
      )
    }
    return (
      <div>
        {header}
        {children()}
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
