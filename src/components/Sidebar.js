import React from 'react'

export default class extends React.Component {
  render () {
    return (
      <div className="sidebar pure-u-1 pure-u-md-1-4">
        <div className="header">
          <a href="/"><h1 className="brand-title">cat /var/log/me</h1></a>
          <h2 className="brand-tagline">AgustinCB&apos;s computing adventures</h2>
          <div><a href="http://github.com/AgustinCB" target="_blank" className="pure-button blog-button">GitHub</a></div>
        </div>
      </div>
    )
  }
}
