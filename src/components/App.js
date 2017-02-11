import React from 'react'

import SearchBar from './SearchBar'
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
        <main className="content pure-u-1 pure-u-md-3-4">
          <SearchBar history={this.props.router} />
          {this.renderChildren()}
        </main>
      </div>
    )
  }
}
