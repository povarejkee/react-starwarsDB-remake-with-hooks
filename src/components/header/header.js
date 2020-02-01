import React from 'react'

import './header.css'
import { NavLink, Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="header d-flex">
      <h3>
        <Link to="/">StarDB</Link>
      </h3>
      <ul className="d-flex">
        <li>
          <NavLink to="/people" activeClassName="active">
            People
          </NavLink>
        </li>
        <li>
          <NavLink to="/planets" activeClassName="active">
            Planets
          </NavLink>
        </li>
        <li>
          <NavLink to="/starships" activeClassName="active">
            Starships
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
