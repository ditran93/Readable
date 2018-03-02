import React, { Component } from 'react'
<<<<<<< HEAD
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../styles/CreatePostForm.css'
=======
>>>>>>> 2b06868d6ea6691152d4236d8ea77eee00b980d4

export default class CreatePostForm extends Component {
  render() {
    const { categories } = this.props
    return (
<<<<<<< HEAD
      <div className='create-post-form'>
        <h3>Create Post Form</h3>
        <Form>
          <FormGroup>
            <Label for="selectCategories">Choose A Category</Label>
            <Input type="select" name="select" id="selectCategories" bsSize="sm">
              {categories.map((category) => (
                <option key={category.name} value={category.name}>{category.name}</option>
              ))}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="inputAuthor">Author</Label>
            <Input type="text" name="author" id="inputAuthor"></Input>
          </FormGroup>
          <FormGroup>
            <Label for="inputTitle">Title</Label>
            <Input type="text" name="title" id="inputTitle"></Input>
          </FormGroup>
          <FormGroup>
            <Label for="inputContent">Content</Label>
            <Input type="textarea" name="content" id="inputContent"></Input>
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
=======
      <div>
        <h3>Create Post</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Select a Category:
            <select>
              {categories.map((category) => (
                <option key={category.name} value={category.name}>{category.name}</option>
              ))}
            </select>
          </label><br></br>
          <label>
            Author:
            <input type="text"></input>
          </label><br></br>
          <label>
            Title:
            <input type="text"></input>
          </label><br></br>
          <label>
            Author:
            <textarea type="text"></textarea>
          </label><br></br>
          <button type="submit">Submit</button>
        </form>
>>>>>>> 2b06868d6ea6691152d4236d8ea77eee00b980d4
      </div>
    )
  }
}