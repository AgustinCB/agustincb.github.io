import React from 'react'

import PostActions from '../actions/post'
import PostStore from '../stores/post'
import Post from '../components/Post'
import Loading from '../components/Loading'

export default class extends React.Component {
  constructor () {
    super()
    this.state = { posts: [], page: 0 }

    this.onPosts = this.onPosts.bind(this)
		this.loadMore = this.loadMore.bind(this)
  }

  componentDidMount () {
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
    const posts = this.state.posts
      ? this.state.posts.map((post) =>
        (<Post key={post._id} post={post} showComments={false} />)
      )
      : (<Loading />)
		const nextPage = this.state.count - this.state.posts.length > 0
			? (<button className="button-cta pure-button" onClick={this.loadMore}>More</button>)
			: null
    return (
      <div>{posts}{nextPage}</div>
    )
  }
}
