import React from'react'
import ReactDOM from'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './components/App'
import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'
import SearchPage from './pages/SearchPage'
import CategoryPage from './pages/CategoryPage'
import NotFoundPage from './pages/NotFoundPage'

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />

      <Route path="" component={HomePage} />
      <Route path="/" component={HomePage} />
      <Route path="post/:id" component={PostPage} />
      <Route path="post/:id/" component={PostPage} />
      <Route path="search/:term/" component={SearchPage} />
      <Route path="search/:term" component={SearchPage} />
      <Route path="category/:category/" component={CategoryPage} />
      <Route path="category/:category" component={CategoryPage} />

      <Route path="*" component={HomePage} />
    </Route>
  </Router>
)

ReactDOM.render(
  router,
  document.getElementById('app')
)
