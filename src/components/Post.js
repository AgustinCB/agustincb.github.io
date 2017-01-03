import React from 'react'
import {markdown as md} from 'markdown'

import Comment from './Comment'
import CommentEditor from './CommentEditor'
import ReactDisqusThread from 'react-disqus-thread'

export default class extends React.Component {
  render () {
    const post = this.props.post
    const comments = !this.props.showComments
      ? (<a className="post-meta" href={`/post/${post._id}`}>{post.comments.length} comments</a>)
      : (<div>
          <ReactDisqusThread
            shortname={this.props.post.title}
            identifier={this.props.post._id}
            title={`{this.props.post.title} Thread`}
            url={window.location.href}
            category_id={this.props.post._id}
            onNewComment={this.handleNewComment}/>
        </div>)

    return (
      <section className="post">
        <header className="post-header">
          <img width="48" height="48" alt={`${post.author.username}'s avatar`} className="post-avatar" src="http://2.gravatar.com/avatar/81f8e116302db3b8643873eda3109f2e" />
          <h2><a href={`/post/${post._id}`}>{post.title}</a></h2>
          <p className="post-meta">By <a className="post-author">{post.author.username}</a> under <a className="post-category">Uncategorized</a></p>
        </header>
        <div className="post-description"
          dangerouslySetInnerHTML={{__html: md.toHTML(post.content)}} />
        <footer>
          {comments}
        </footer>
      </section>
    )
  }
}
