import React from 'react'

import PostActions from '../actions/post'
import PostStore from '../stores/post'
import PostList from '../components/PostList'

export default class extends React.Component {
  constructor () {
    super()
    this.state = { posts: [], page: 0 }

    this.onPosts = this.onPosts.bind(this)
  }

  componentDidMount () {
    this.unsubscribe = PostStore.listen(this.onPosts)
    PostActions.search(this.props.params.term)
  }

  componentDidUpdate(prevProps) {
    document.title = `Search ${this.props.params.term}`
    if (prevProps.params.term !== this.props.params.term) {
      PostActions.search(this.props.params.term)
    }
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  onPosts (err, result) {
    if (err) return console.log(err)
    const page = parseInt(result.page) + 1;
    const count = result.count
    const posts = parseInt(result.page) === 0
      ? result.posts
      : this.state.posts.concat(result.posts)
    this.setState({ page, posts, count })
  }

  loadMore () {
    return PostActions.search(this.state.search, this.state.page)
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
