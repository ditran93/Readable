import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../styles/CreatePostForm.css'
import { createPost, editPost } from '../actions'
import { connect } from 'react-redux'
import { randomId } from '../utils/helpers'
import { withRouter } from 'react-router-dom';

class CreatePostForm extends Component {

  state = {
    id: randomId(),
    author: '',
    category: 'react',
    title: '',
    body: '',
    voteScore: 1,
    deleted: false,
    timestamp: Date.now()
  }

  componentDidMount() {
    const {originalPost} = this.props
    if (originalPost) {
      this.setState({
        id: originalPost.id,
        author: originalPost.author,
        category: originalPost.category,
        title: originalPost.title,
        voteScore: originalPost.voteScore,
        body: originalPost.body
      }) 
    }
  }

  handlechange(event) {
    const value = event.target.value
    const name = event.target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const { originalPost, createPost, editPost, onSubmit } = this.props

    if(originalPost) {
      editPost(this.state)
    } else {
      createPost(this.state)
    }

    if(onSubmit){
      onSubmit()
    }
    return this.props.history.push("/");
  }

  generateButton() {
    const { originalPost } = this.props
    const button = originalPost ? "Save Post" : "Create Post"

    if (originalPost) {
      return (
        <div>
          <Button type="submit">{button}</Button>
          <Button onClick={() => {this.props.onCancel()}}
          >Cancel</Button>
        </div>
      )
      } else {
        return <Button type="submit">{button}</Button>;
      }
  }

  render() {
    const { categories } = this.props
    const { category, author, title, body } = this.state
    console.log('form: ', this.state)
    return (
      <div className='create-post-form'>
        <h3>Post Form</h3>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <FormGroup>
            <Label for="selectCategories">Choose A Category</Label>
            <Input 
              value={category}
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
              value={author}
              onChange={e => this.handlechange(e)} required/>
          </FormGroup>
          <FormGroup>
            <Label for="inputTitle">Title</Label>
            <Input 
              type="text" 
              value={title}
              name="title" 
              onChange={e => this.handlechange(e)} required/>
          </FormGroup>
          <FormGroup>
            <Label for="inputContent">Content</Label>
            <Input 
              type="textarea" 
              value={body}
              name="body" 
              onChange={e => this.handlechange(e)} required/>
          </FormGroup>
          {this.generateButton()}
        </Form>
      </div>
    )
  }
}


function mapStateToProps({ categories }) {
  return {
    categories: categories
  }
}

export default withRouter(connect(mapStateToProps, {createPost, editPost})(CreatePostForm))
