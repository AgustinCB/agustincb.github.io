import React from 'react'

import PostActions from '../actions/post'
import PostStore from '../stores/post'
import Post from '../components/Post'

export default class extends React.Component {
  constructor () {
    super()
    this.state = { }

    this.onPost = this.onPost.bind(this)
  }

  componentDidMount () {
    this.unsubscribe = PostStore.listen(this.onPost)
    PostActions.view(this.props.params.id)
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  onPost (err, post) {
    this.setState({ post })
  }

  render () {
    if (!this.state.post) return (<div></div>)
    return (
      <Post post={this.state.post}  showComments={true} />
    )
  }
}
