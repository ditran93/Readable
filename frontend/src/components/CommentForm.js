import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../styles/CreatePostForm.css'
import { connect } from 'react-redux'
import { randomId } from '../utils/helpers'
import { withRouter } from 'react-router-dom';
import * as actions from'../actions/comments'

class CommentForm extends Component {

  state = {
    id: randomId(),
    author: '',
    body: '',
    parentId: '',
    voteScore: 1,
    deleted: false,
    timestamp: Date.now()
  }

  componentDidMount() {
    const {originalComment} = this.props
    if (originalComment) {
      this.setState({
        id: originalComment.id,
        parentId: this.props.parentId,
        author: originalComment.author,
        voteScore: originalComment.voteScore,
        body: originalComment.body
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
    const { originalComment, createComment, editComment, onSubmit } = this.props
    if(originalComment) {
      editComment(this.state)
    } else {
      createComment({...this.state, parentId: this.props.parentId})
      window.location.reload(false); 
    }

    if(onSubmit){
      onSubmit()
    }
  }

  generateButton() {
    const { originalComment } = this.props
    const button = originalComment ? "Save Comment" : "Create Comment"

    if (originalComment) {
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
    const { author, body } = this.state
    return (
      <div className='create-post-form'>
        <h3>Comment Form</h3>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <FormGroup>
            <Label for="inputAuthor">Author</Label>
            <Input 
              type="text" 
              name="author" 
              value={author}
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



export default withRouter(connect(null, actions)(CommentForm))
