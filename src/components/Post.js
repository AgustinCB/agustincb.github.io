import React from 'react'
import { Link } from 'react-router'
import {markdown as md} from 'markdown'

import Comment from './Comment'
import CommentEditor from './CommentEditor'
import ReactDisqusThread from 'react-disqus-thread'

export default class extends React.Component {
  render () {
    const post = this.props.post
    const comments = !this.props.showComments
      ? <div></div>
      : (<div>
          <ReactDisqusThread
            shortname="cat-var-log-me"
            identifier={this.props.post.title}
            title={`${this.props.post.title} Thread`}
            url={window.location.href}
            onNewComment={this.handleNewComment}/>
        </div>)

    return (
      <section className="post">
        <header className="post-header">
          <img width="48" height="48" alt={`${post.author.username}'s avatar`} className="post-avatar" src="http://2.gravatar.com/avatar/81f8e116302db3b8643873eda3109f2e" />
          <h2><Link to={`/post/${encodeURIComponent(post.title)}`}>{post.title}</Link></h2>
          <p className="post-meta">By <a className="post-author">{post.author.username}</a> under <Link to={`/category/${post.category}`} className="post-category">{post.category ? post.category : 'Uncategorized'}</Link></p>
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
