import React, { Component } from 'react'
import MainPage from './MainPage'
import '../styles/ReadableApp.css';
import CreatePostForm from './CreatePostForm'
import { Switch, withRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPosts, fetchCategories } from '../actions/index'
import CategoryPage from './CategoryPage'

class ReadableApp extends Component {

  componentDidMount() {
    this.props.fetchPosts()
    this.props.fetchCategories()
  }

  render() {
    return (
      <div className="App">
        <h3 className="banner"> Welcome To Readable</h3>
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