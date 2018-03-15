import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCategories } from '../actions'

class CategoryNavigateBar extends Component {
  
  render () {
    const { categories } = this.props
    return (
      <div>
        <ul>
          <li>
            <Link to="/">
              Show All
            </Link>
          </li>
          {categories.map((category) => (
            <li key={category.name}>
              <Link to={`/${category.path}`} >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCategories: (data) => dispatch(fetchCategories(data)),
  }
}

function mapStateToProps({categories}) {
  return {
    categories: categories
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryNavigateBar)