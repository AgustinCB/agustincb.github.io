import React from 'react'

export default class extends React.Component {
  constructor () {
    super()
    this.state = { posts: [], page: 0, search: false }
		this.handleKeyPress = this.handleKeyPress.bind(this)
  }

	handleKeyPress (evt) {
		if (evt.key === 'Enter') {
			this.search()
		}
	}

	search () {
		const search = this.refs.term.value
    this.props.history.push('/search/' + encodeURIComponent(search))
	}

  render () {
    return (
      <div className="search-bar">
        <input type="text" placeholder="Search" className="search-input" ref="term" onKeyPress={this.handleKeyPress} />
      </div>
    )
  }
}
