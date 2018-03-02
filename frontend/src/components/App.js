import React, { Component } from 'react'
import ListPosts from './ListPosts'
import '../App.css';
import NavigationBar from './NavigationBar'
import CreatePostForm from './CreatePostForm'

class App extends Component {
  render() {
    let posts = [
      {
        id: '8xf0y6ziyjabvozdd253nd',
        timestamp: 1467166872634,
        title: 'Udacity is the best place to learn React',
        body: 'Everyone says so after all.',
        author: 'thingtwo',
        category: 'react',
        voteScore: 6,
        deleted: false,
        commentCount: 2
      },
      {
        id: '6ni6ok3ym7mf1p33lnez',
        timestamp: 1468479767190,
        title: 'Learn Redux in 10 minutes!',
        body: 'Just kidding. It takes more than 10 minutes to learn technology.',
        author: 'thingone',
        category: 'redux',
        voteScore: -5,
        deleted: false,
        commentCount: 0
      }
    ]

    const categories = [
      {
        name: 'react',
        path: 'react'
      },
      {
        name: 'redux',
        path: 'redux'
      },
      {
        name: 'udacity',
        path: 'udacity'
      }
    ]
    return (
      <div className="App">
        <NavigationBar categories={categories} />
        <ListPosts posts={posts}/>
        <CreatePostForm categories={categories} />
      </div>
    );
  }
}

export default App;
