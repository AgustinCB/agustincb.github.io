'use strict'

import Reflux from 'reflux'

import PostActions from '../actions/post'
import * as Post from '../util/post'

export default Reflux.createStore({
  init () {
    this.listenTo(PostActions.all, this.getAll)
  },

  throwError (err) {
    this.trigger(err)
  },

  getAll () {
    Post.all()
      .then((res) => this.trigger(null, res.body))
      .catch(this.throwError)
  }
})
