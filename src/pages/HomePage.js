import React from 'react'

import PostActions from '../actions/post'
import PostStore from '../stores/post'
import Post from '../components/Post'

export default class extends React.Component {
  constructor () {
    super()
    this.state = { posts: [] }

    this.onPosts = this.onPosts.bind(this)
  }

  componentDidMount () {
    this.unsubscribe = PostStore.listen(this.onPosts)
    PostActions.all()
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  onPosts (err, posts) {
    if (err) return console.log(err)
    this.setState({ posts })
  }

  render () {
    const posts = this.state.posts.map((post) => {
      return (<Post key={post._id} post={post} showComments={false} />)
    })
    return (
      <div>{posts}</div>
    )
  }
}
