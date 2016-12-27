import React from 'react'
import {markdown as md} from 'markdown'

export default class extends React.Component {
  render () {
    const post = this.props.post
    return (
      <section className="post">
        <header className="post-header">
          <img width="48" height="48" alt={`${post.author.username}'s avatar`} className="post-avatar" src="http://2.gravatar.com/avatar/81f8e116302db3b8643873eda3109f2e" />
          <h2><a href={`/post/${post._id}`}>{post.title}</a></h2>
          <p className="post-meta">By <a className="post-author">{post.author.username}</a> under <a className="post-category">Uncategorized</a></p>
        </header>
        <div className="post-description"
          dangerouslySetInnerHTML={{__html: md.toHTML(post.content)}}>
        </div>
      </section>
    )
  }
}
