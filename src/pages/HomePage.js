import React from 'react'

import PostActions from '../actions/post'
import PostStore from '../stores/post'
import Post from '../components/Post'
import Loading from '../components/Loading'

export default class extends React.Component {
  constructor () {
    super()
    this.state = { posts: [], page: 0, search: false }

    this.onPosts = this.onPosts.bind(this)
		this.loadMore = this.loadMore.bind(this)
		this.search = this.search.bind(this)
  }

  componentDidMount () {
    this.unsubscribe = PostStore.listen(this.onPosts)
    PostActions.all()
  }

  componentWillUnmount () {
    this.unsubscribe()
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
    const posts = this.state.posts
      ? this.state.posts.map((post) =>
        (<Post key={post._id} post={post} showComments={false} />)
      )
      : (<Loading />)
		const nextPage = this.state.count - this.state.posts.length > 0
			? (<button className="button-cta pure-button" onClick={this.loadMore}>More</button>)
			: null

    return (
      <div>
				<div className="search-bar">
					<input type="text" placeholder="Search" className="search-input" ref="term" />
					<button className="button-cta pure-button" onClick={this.search}>
						Search
					</button>
				</div>
				{posts}
				{nextPage}
			</div>
    )
  }
}
