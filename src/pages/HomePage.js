import React from 'react'

import PostActions from '../actions/post'
import PostStore from '../stores/post'
import PostList from '../components/PostList'

export default class extends React.Component {
  constructor () {
    super()
    this.state = { posts: [], page: 0, search: false }

    this.onPosts = this.onPosts.bind(this)
		this.loadMore = this.loadMore.bind(this)
		this.search = this.search.bind(this)
		this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  componentDidMount () {
    this.unsubscribe = PostStore.listen(this.onPosts)
    PostActions.all()
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

	handleKeyPress (evt) {
		if (evt.key === 'Enter') {
			this.search()
		}
	}

	loadMore () {
		if (this.state.search) {
			return PostActions.search(this.state.search, this.state.page)
		}
		PostActions.all(this.state.page)
	}

	search () {
		const search = this.refs.term.value
		this.setState({ page: 0, search, posts: [] })
		PostActions.search(search, 0)
	}

  onPosts (err, result) {
    if (err) return console.log(err)
		const page = this.state.page + 1;
		const count = result.count
		const posts = this.state.posts.concat(result.posts)
		this.setState({ page, posts, count })
  }

  render () {
		console.log(this)
		const nextPage = this.state.count - this.state.posts.length > 0
			? (<button className="button-cta pure-button" onClick={this.loadMore}>More</button>)
			: null

    return (
      <div>
				<div className="search-bar">
					<input type="text" placeholder="Search" className="search-input" ref="term" onKeyPress={this.handleKeyPress} />
				</div>
				<PostList posts={this.state.posts} />
				{nextPage}
			</div>
    )
  }
}
