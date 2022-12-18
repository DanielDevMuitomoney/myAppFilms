import { useState } from 'react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'

import '../pages/css/NavBar.css'

export const NavBar = () => {
  const [Search, SetSearch] = useState('')
  const Navigate = useNavigate()

  const HandleSubmit = (e) => {
    e.preventDefault()
    if (!Search) return

    Navigate(`/search?q=${Search}`)
    SetSearch("")
    
  }

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie />
          Movies Lib
        </Link>
      </h2>
      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => SetSearch(e.target.value)}
          value={Search}
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  )
}
export default NavBar
