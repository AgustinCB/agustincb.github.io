import React from 'react'
import {markdown as md} from 'markdown'

import PostActions from '../actions/post'
import PostStore from '../stores/post'

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
      return (
        <section className="post" key={post.id}>
          <header className="post-header" key={post.id}>
            <img key={post.id} width="48" height="48" alt="AgustinCB's avatar" className="post-avatar" src="http://2.gravatar.com/avatar/81f8e116302db3b8643873eda3109f2e" />
            <h2 key={post.id}>{post.title}</h2>
            <p key={post.id} className="post-meta">By <a key={post.id} className="post-author">{post.author.username}</a> under <a key={post.id} className="post-category">Uncategorized</a></p>
          </header>
          <div key={post.id} className="post-description"
            dangerouslySetInnerHTML={{__html: md.toHTML(post.content)}}>
          </div>
        </section>
      )
    })
    return (
      <div>{posts}</div>
    )
  }
}
