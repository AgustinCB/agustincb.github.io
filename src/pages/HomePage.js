import React from 'react'

import PostActions from '../actions/post'
import PostStore from '../stores/post'
import PostList from '../components/PostList'

export default class extends React.Component {
  constructor () {
    super()
    this.state = { posts: [], page: 0 }

    this.onPosts = this.onPosts.bind(this)
		this.loadMore = this.loadMore.bind(this)
  }

  componentDidMount () {
		document.title = 'AgustinCB\'s computing adventures'
    this.unsubscribe = PostStore.listen(this.onPosts)
    PostActions.all()
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

	loadMore () {
		PostActions.all(this.state.page)
	}

  onPosts (err, result) {
    if (err) return console.log(err)
		const page = this.state.page + 1;
		const count = result.count
		const posts = this.state.posts.concat(result.posts)
		this.setState({ page, posts, count })
  }

  render () {
		const nextPage = this.state.count - this.state.posts.length > 0
			? (<button className="button-cta pure-button" onClick={this.loadMore}>More</button>)
			: null

    return (
      <div>
				<PostList posts={this.state.posts} />
				{nextPage}
			</div>
    )
  }
}
