import React, { Component } from 'react'
import MainPage from './MainPage'
import CreatePostForm from './CreatePostForm'
import { Switch, withRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPosts, fetchCategories } from '../actions/index'
import CategoryPage from './CategoryPage'
import PostDetails from './PostDetails'
import Banner from './Banner'

class ReadableApp extends Component {

  componentDidMount() {
    this.props.fetchPosts()
    this.props.fetchCategories()
  }

  render() {
    return (
      <div className="App">
        <Banner />
        <Switch>
          <Route exact path="/" render={({ history }) => (
            <div>
              <MainPage history={history}/>
            </div>
          )}/>
          <Route exact path="/createPost" render={({ history }) => (
            <CreatePostForm history={history}/>
          )}/>
          <Route exact path='/:category/' render={({match}) => (
              <CategoryPage category={match.params.category}/>
            )}/>
          <Route exact path='/:category/:post_id' render={({match}) => (
              <PostDetails postId={match.params.post_id}/>
            )}/>
        </Switch>
      </div>
    );
  }
}

function mapStateToProps({ posts, categories }) {
  return {
    posts: posts,
    categories: categories
  }
}

export default withRouter(connect(mapStateToProps, {fetchPosts, fetchCategories})(ReadableApp))