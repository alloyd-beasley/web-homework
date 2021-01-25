import React from 'react'
import { navStyle } from './NavStyles'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav css={navStyle}>
      <ul >
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/Insights'>Insights</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
