import React from 'react'

import Sidebar from './Sidebar'

export default class extends React.Component {
  constructor () {
    super()
    this.state = {}
  }

  /**
   * Render current page
   */
  renderChildren() {
    return React.cloneElement(this.props.children, {});
  }

  render () {
    return (
      <div id="layout" className="pure-g">
        <Sidebar />
        <div className="content pure-u-1 pure-u-md-3-4">
          {this.renderChildren()}
        </div>
      </div>
    )
  }
}
