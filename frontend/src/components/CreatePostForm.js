import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../styles/CreatePostForm.css'
import { createPost } from '../actions'
import { connect } from 'react-redux'
import { randomId } from '../utils/helpers'

class CreatePostForm extends Component {

  state = {
    id: randomId(),
    author: '',
    category: 'react',
    title: '',
    content: '',
    voteScore: 1,
    timestamp: Date.now()
  }

  handlechange(event) {
    const value = event.target.value
    const name = event.target.name

    this.setState({
      [name]: value
    })
  }

  handleCreatePost() {
    debugger
    this.props.createPost(this.state)
  }

  render() {
    console.log(this.state)
    const { categories } = this.props
    console.log(this.props)
    return (
      <div className='create-post-form'>
        <h3>Create Post Form</h3>
        <Form onSubmit={() => this.handleCreatePost()}>
          <FormGroup>
            <Label for="selectCategories">Choose A Category</Label>
            <Input 
              value={this.state.category}
              type="select" 
              name="category"
              onChange={e => this.handlechange(e)}>
              {categories.map((category) => (
                <option key={category.name} value={category.name}>{category.name}</option>
              ))}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="inputAuthor">Author</Label>
            <Input 
              type="text" 
              name="author" 
              onChange={e => this.handlechange(e)} required/>
          </FormGroup>
          <FormGroup>
            <Label for="inputTitle">Title</Label>
            <Input 
              type="text" 
              name="title" 
              onChange={e => this.handlechange(e)} required/>
          </FormGroup>
          <FormGroup>
            <Label for="inputContent">Content</Label>
            <Input 
              type="textarea" 
              name="content" 
              onChange={e => this.handlechange(e)} required/>
          </FormGroup>
          <Button type="submit">Create Post</Button>
        </Form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createPost: (data) => dispatch(createPost(data))
  }
}

function mapStateToProps({ posts, categories }) {
  const postIdArray = Object.keys(posts)
  return {
    posts: postIdArray.map((postId) => (
      posts[postId]
    )),
    categories: categories.categories
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostForm)
