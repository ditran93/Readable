import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../styles/CreatePostForm.css'

export default class CreatePostForm extends Component {
  render() {
    const { categories } = this.props
    return (
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
      </div>
    )
  }
}