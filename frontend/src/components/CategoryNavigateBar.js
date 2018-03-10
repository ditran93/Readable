import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { Nav, NavItem, NavLink } from 'reactstrap'

export default class CategoryNavigateBar extends Component {
  render () {
    const { categories } = this.props
    return (
      <div>
        <ul>
          <li>
            <Link to="#">
              Show All
            </Link>
          </li>
          {categories.map((category) => (
            <li key={category.name}>
              <Link to="#">
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* <Nav>
          <NavItem>
            <NavLink href="/">Show All</NavLink>
          </NavItem>
          {categories.map((category) => (
            <NavItem key={category.name}>
              <NavLink href="/">{category.name.toUpperCase()}</NavLink>
            </NavItem>
          ))}
        </Nav> */}
      </div>
    )
  }
}