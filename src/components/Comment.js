import React from 'react'

export default class extends React.Component {
  constructor () {
    super()
    this.state = { }
  }

  render () {
    return (
      <section className="comment">
        <header className="comment-header">
          <p className="post-description">By {this.props.comment.author}</p>
        </header>
        <div className="comment-description"
          dangerouslySetInnerHTML={{__html: md.toHTML(post.content)}} />
      </section>
    )
  }
}
