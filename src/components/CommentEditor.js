import React from 'react'

export default class extends React.Component {
  constructor () {
    super()
    this.state = { }
    this.submitComment = this.submitComment.bind(this)
  }

  submitComment () {
    console.log('submitting', this.refs.comment.value)
  }

  render () {
    return (
      <section className="comment-editor">
        <textarea ref="comment" />
        <button className="pure-button pure-button-primary" onClick={this.submitComment}>
          Submit
        </button>
      </section>
    )
  }
}
