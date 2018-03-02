import React, { Component } from 'react'

export default class CreatePostForm extends Component {
  render() {
    const { categories } = this.props
    return (
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
      </div>
    )
  }
}