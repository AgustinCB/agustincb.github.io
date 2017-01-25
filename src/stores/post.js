'use strict'

import Reflux from 'reflux'

import PostActions from '../actions/post'
import * as Post from '../util/post'

export default Reflux.createStore({
  init () {
    this.listenTo(PostActions.all, this.getAll)
    this.listenTo(PostActions.view, this.getPost)
    this.listenTo(PostActions.search, this.getSearch)
    this.listenTo(PostActions.category, this.getCategory)
  },

  throwError (err) {
    this.trigger(err)
  },

  getAll (page = 0) {
    Post.all(page)
      .then((res) => this.trigger(null, res.body))
      .catch(this.throwError)
  },

  getSearch (term, page = 0) {
    Post.search(term, page)
      .then((res) => this.trigger(null, res.body))
      .catch(this.throwError)
  },

  getCategory (category, page = 0) {
    Post.category(category, page)
      .then((res) => this.trigger(null, res.body))
      .catch(this.throwError)
  },

  getPost (id) {
    Post.view(id)
      .then((res) => this.trigger(null, res.body))
      .catch(this.throwError)
  }
})
