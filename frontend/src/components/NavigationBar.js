import React, { Component } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'

export default class NavigationBar extends Component {
  render () {
    const { categories } = this.props
    return (
      <div>
        <Nav>
          <NavItem>
            <NavLink href="/">Show All</NavLink>
          </NavItem>
          {categories.map((category) => (
            <NavItem key={category.name}>
              <NavLink href="/">{category.name.toUpperCase()}</NavLink>
            </NavItem>
          ))}
        </Nav>
      </div>
    )
  }
}