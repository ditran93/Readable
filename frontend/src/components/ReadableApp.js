import React, { Component } from 'react'
import ListPosts from './ListPosts'
import '../styles/ReadableApp.css';
import CreatePostForm from './CreatePostForm'
import { Route } from 'react-router-dom'

export default class ReadableApp extends Component {
  render() {
   
    return (
      <div className="App">
        <h3 className="banner"> Welcome To Readable</h3>
        <Route exact path="/" render={() => (
          <div>
            <ListPosts />
          </div>
        )}/>
        <Route path="/createPost" render={() => (
          <CreatePostForm />
        )}/>
      </div>
    );
  }
}

