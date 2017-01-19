import React from 'react'

import Post from '../components/Post'
import Loading from '../components/Loading'

export default class extends React.Component {
  constructor () {
    super()
    this.state = { posts: [] }
  }

  render () {
    const posts = this.props.posts
      ? this.props.posts.map((post) =>
        (<Post key={post._id} post={post} showComments={false} />)
      )
      : (<Loading />)
    return (
      <div>{posts}</div>
    )
  }
}
